import {Buffer} from 'buffer';
import {Storage} from '@google-cloud/storage';
import type {Context} from 'hono';
import type {z} from 'zod';
import {PrismaClient} from '../../../../generated/client';
import type {PhotoQueryInterface} from '../../../../modules/photo/photo.query';
import {PhotoQueryPostgres} from '../../../../modules/photo/photo.query.postgres';
import type {loggerInterface} from '../../../../utils/logger';
import {AbstractHandler} from '../../../common/abstractHandler';
import {requestBodySchema, type responseBodySchema} from './schema';
export class PhotosSearchPostHandler extends AbstractHandler {
  private readonly photoQuery: PhotoQueryInterface;
  private readonly prismaClient: PrismaClient;

  constructor(dep?: {photoQuery?: PhotoQueryInterface; logger?: loggerInterface}) {
    super(dep);
    this.prismaClient = new PrismaClient();
    this.photoQuery = dep?.photoQuery ?? new PhotoQueryPostgres(this.prismaClient);
  }

  execute = async (c: Context) => {
    try {
      const requestBody = requestBodySchema.safeParse(await c.req.json());
      this.logger.info('PhotosSearchPostHandler: requestBody', requestBody);
      if (!requestBody.success) {
        this.logger.warn('bad request');
        return c.json({message: 'bad request'}, 400);
      }

      const result = await this.logic(requestBody.data);
      return c.json(result, 200);
    } catch (e: any) {
      this.logger.error('PhotosSearchPostHandler: Internal Server Error', {
        error: e,
        message: e?.message ?? '',
        stack: e?.stack ?? '',
      });
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  private logic = async (body: z.infer<typeof requestBodySchema>): Promise<z.infer<typeof responseBodySchema>> => {
    const {limit, date, tag_id, last_id} = body.option;

    const photos = await this.photoQuery.list({
      limit: limit ?? 20,
      date: date ? new Date(date) : new Date(),
      tagId: tag_id,
      lastId: last_id,
    });

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

    const list: z.infer<typeof responseBodySchema> = [];
    for (const photo of photos) {
      const file = bucket.file(photo.fileName());
      const thumbnailFile = bucket.file(`small_${photo.fileName()}`);

      const [signedUrl, thumbnailSignedUrl] = await Promise.all([
        file.getSignedUrl({
          version: 'v4',
          action: 'read',
          // 有効期限は120分に設定する
          expires: Date.now() + 120 * 60 * 1000,
        }),
        thumbnailFile.getSignedUrl({
          version: 'v4',
          action: 'read',
          expires: Date.now() + 120 * 60 * 1000,
        }),
      ]);

      list.push({
        id: photo.id(),
        url: signedUrl[0],
        thumbnail_url: thumbnailSignedUrl[0],
        date: photo.date().toISOString(),
        tags: photo.tags(),
        description: photo.description() ?? '',
      });
    }
    return list;
  };
}
