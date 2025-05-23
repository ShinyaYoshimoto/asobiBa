import {Bucket, Storage} from '@google-cloud/storage';
import AdmZip from 'adm-zip';
import sharp from 'sharp';
import {v4 as uuidv4} from 'uuid';

export class TriggerUploadGcs {
  public static async handle(handler: any): Promise<void> {
    const storage = new Storage();

    const bucketName = handler.data.bucket;
    const fileName = handler.data.name;

    const bucket = storage.bucket(bucketName);
    const file = bucket.file(fileName);

    if (fileName.endsWith('.zip')) {
      await this.zipHandler(file, bucket);
    } else if (fileName.endsWith('.png') || fileName.endsWith('.jpg') || fileName.endsWith('.jpeg')) {
      if (fileName.startsWith('small_')) {
        // サムネイル用の画像なので、画像ハンドラを呼び出さない
        return;
      }
      await this.imageHandler(file);
    } else {
      throw new Error('Uploaded file is not a zip or image file.');
    }
  }

  private static zipHandler = async (file: any, bucket: Bucket): Promise<void> => {
    console.log('zipHandler', file.name, bucket.name);

    // zipファイル名の最初の「_」以降、「.zip」までをtag_idとする. また、「_」がない場合は、tag_idはundefinedとする
    const tagId = file.name.includes('_') ? file.name.split('_')[1]?.split('.zip')[0] : undefined;
    console.log('tagId', tagId);

    // 1. 解凍
    // ストリームでzipファイルをダウンロード
    // const downloadStream = file.createReadStream();
    // const chunks: Buffer[] = [];

    // console.log('Starting download');
    // await new Promise((resolve, reject) => {
    //   downloadStream.on('data', (chunk: any) => chunks.push(Buffer.from(chunk)));
    //   downloadStream.on('end', () => resolve(null));
    //   downloadStream.on('error', reject);
    // });

    // const buffer = Buffer.concat(chunks);
    // console.log('Download completed, size:', buffer.length);

    // console.log('start file.download');
    const [buffer] = await file.download();
    console.log('end file.download', buffer);
    const zip = new AdmZip(buffer);
    console.log('start zip.getEntries');
    const zipEntries = zip.getEntries();
    console.log('end zip.getEntries', zipEntries.length);

    // 画像ファイルのみをフィルタリング
    const imageEntries = zipEntries.filter((entry: any) => {
      const ext = entry.entryName.toLowerCase().split('.').pop();
      return ['jpg', 'jpeg', 'png'].includes(ext || '');
    });
    console.log('imageEntries', imageEntries.length);
    // 20枚を超える場合はエラー
    if (imageEntries.length > 20) {
      throw new Error(`Too many images. Maximum 20 images allowed. Found: ${imageEntries.length}`);
    }

    // 2. 解凍済みのファイルを圧縮してアップロード
    // for (const entry of imageEntries) {
    await Promise.all(
      imageEntries.map(async (entry: any) => {
        console.log('entry', entry.entryName);
        const imageBuffer = entry.getData();
        console.log('start sharp');
        // const compressedBuffer = await sharp(imageBuffer).jpeg({quality: 70}).toBuffer();
        // const smallCompressedBuffer = await sharp(imageBuffer).resize(500).jpeg({ quality: 70 }).toBuffer();

        const [compressedBuffer, smallCompressedBuffer, metadata] = await Promise.all([
          sharp(imageBuffer).jpeg({quality: 70}).toBuffer(),
          sharp(imageBuffer).resize(500).jpeg({quality: 70}).toBuffer(),
          sharp(imageBuffer).metadata(),
        ]);
        console.log('end sharp');

        // 画像のメタデータを取得
        const exif = metadata.exif as any;
        const tookAt = exif?.DateTimeOriginal
          ? new Date(exif.DateTimeOriginal.replace(':', '-').replace(':', '-'))
          : new Date();

        // UUIDで新しいファイル名を生成
        const newFileName = `${uuidv4()}.jpg`;

        // バケットにアップロード（メタデータにtag_idと撮影日時を含める）
        const newFile = bucket.file(newFileName);
        const smallNewFile = bucket.file(`small_${newFileName}`);

        await Promise.all([
          newFile.save(compressedBuffer, {
            metadata: {
              contentType: 'image/jpeg',
              metadata: {
                tag_id: tagId,
                original_name: entry.entryName,
                took_at: tookAt.toISOString(), // 撮影日時を追加
              },
            },
          }),
          // サムネイル用の画像をバケットにアップロード
          smallNewFile.save(smallCompressedBuffer, {
            metadata: {
              contentType: 'image/jpeg',
            },
          }),
        ]);
      })
    );

    // 3. 解凍したZipファイルを削除
    await file.delete();
  };

  private static imageHandler = async (file: any): Promise<void> => {
    console.log('imageHandler', file);

    try {
      // 1. メタデータから情報を取得
      const [fileMetadata] = await file.getMetadata();
      const tagId = fileMetadata.metadata?.tag_id;
      const tookAt = fileMetadata.metadata?.took_at;

      // 3. APIにリクエスト
      // FIXME: 環境変数を使用する
      const response = await fetch(`${process.env.API_ENDPOINT}/photos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          file_name: file.name,
          tag_ids: tagId ? [tagId] : [],
          took_at: tookAt,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      console.log('Photo metadata saved successfully');
    } catch (error) {
      console.error('Error processing image:', error);
      throw error;
    }
  };
}
