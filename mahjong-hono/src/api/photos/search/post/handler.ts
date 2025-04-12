import {Context} from 'hono';
import {requestBodySchema, responseBodySchema} from './schema';
import {PrismaClient} from '../../../../generated/client';
import {z} from 'zod';
import {loggerInterface} from '../../../../utils/logger';
import {AbstractHandler} from '../../../common/abstractHandler';
import {PhotoQueryInterface} from '../../../../modules/photo/photo.query';
import {PhotoQueryPostgres} from '../../../../modules/photo/photo.query.postgres';
import {Storage} from '@google-cloud/storage';
import * as fs from 'fs';
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
    } catch (e) {
      this.logger.error('PhotosSearchPostHandler: Internal Server Error', e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  private logic = async (body: z.infer<typeof requestBodySchema>): Promise<z.infer<typeof responseBodySchema>> => {
    const {limit, date, tag_id, last_id} = body.option;

    const storage = new Storage({
      keyFilename: process.env.GCS_SA_KEY_PATH,
    });

    const fileName = process.env.GCS_SA_KEY_PATH ?? '';
    const key = fs.readFileSync(fileName, 'utf8');
    this.logger.info('key', key);

    const bucketName = process.env.GCS_BUCKET_NAME;
    if (!bucketName) {
      throw new Error('GCS_BUCKET_NAME is not set');
    }

    const bucket = storage.bucket(bucketName);
    const file = bucket.file('sample.png');

    const signedUrl = await file.getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + 15 * 60 * 1000,
    });

    const photos = await this.photoQuery.list({
      limit: limit ?? 20,
      date: date ? new Date(date) : new Date(),
      tagId: tag_id,
      lastId: last_id,
    });

    return photos.map(photo => ({
      id: photo.id(),
      // url: photo.fileName(),
      url: signedUrl[0],
      thumbnail_url: signedUrl[0],
      date: photo.date().toISOString(),
      tags: photo.tags(),
    }));
  };
}
