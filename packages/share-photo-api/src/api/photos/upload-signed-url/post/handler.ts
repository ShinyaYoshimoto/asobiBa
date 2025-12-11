import {Buffer} from 'buffer';
import {Storage} from '@google-cloud/storage';
import type {Context} from 'hono';
import type {z} from 'zod';
import type {loggerInterface} from '../../../../utils/logger';
import {AbstractHandler} from '../../../common/abstractHandler';
import {requestBodySchema, type responseBodySchema} from './schema';
export class PhotosUploadSignedUrlPostHandler extends AbstractHandler {
  constructor(dep?: {logger?: loggerInterface}) {
    super(dep);
  }

  execute = async (c: Context) => {
    try {
      const requestBody = requestBodySchema.safeParse(await c.req.json());
      this.logger.info('PhotosUploadSignedUrlPostHandler: requestBody', requestBody);
      if (!requestBody.success) {
        this.logger.warn('bad request');
        return c.json({message: 'bad request'}, 400);
      }

      const result = await this.logic(requestBody.data);
      return c.json(result, 200);
    } catch (e: any) {
      this.logger.error('PhotosUploadSignedUrlPostHandler: Internal Server Error', {
        error: e,
        message: e?.message ?? '',
        stack: e?.stack ?? '',
      });
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  private logic = async (body: z.infer<typeof requestBodySchema>): Promise<z.infer<typeof responseBodySchema>> => {
    const {tag_ids} = body;

    // FIXME: この辺はクエリに切り出す. というか本当は、photosの取得と同時に取得したい
    const credentials = JSON.parse(Buffer.from(process.env.GCS_SA_KEY_OBJECT || '', 'base64').toString());
    const storage = new Storage({
      credentials,
      projectId: credentials.project_id,
    });

    const bucketName = process.env.GCS_BUCKET_NAME;
    if (!bucketName) {
      throw new Error('GCS_BUCKET_NAME is not set');
    }

    const bucket = storage.bucket(bucketName);

    const now = new Date();

    // アンダースコア区切りでタグIDをつける（最大3つまで）
    const fileName =
      tag_ids && tag_ids.length > 0 ? now.valueOf() + '_' + tag_ids.join('_') + '.zip' : now.valueOf() + '.zip';

    const file = bucket.file(fileName);

    const signedUrl = await file.getSignedUrl({
      version: 'v4',
      action: 'write',
      // 有効期限は20分に設定する
      expires: Date.now() + 20 * 60 * 1000,
    });

    return {
      url: signedUrl[0],
    };
  };
}
