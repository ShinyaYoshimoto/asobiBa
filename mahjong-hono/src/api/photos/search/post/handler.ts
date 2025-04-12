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
import {Buffer} from 'buffer';
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

    const keyPath = process.env.GCS_SA_KEY_PATH ?? '';
    this.logger.info('keyPath', {keyPath});

    this.logger.info('process.env.GCS_SA_KEY_OBJECT', {process: process.env.GCS_SA_KEY_OBJECT});

    const credentials = JSON.parse(Buffer.from(process.env.GCS_SA_KEY_OBJECT || '', 'base64').toString());
    this.logger.info('credentials', {credentials});

    const storage = new Storage({
      // keyFilename: process.env.GCS_SA_KEY_PATH,
      credentials,
      projectId: credentials.project_id,
    });

    this.logger.info('storage', {storage});

    const bucketName = process.env.GCS_BUCKET_NAME;
    if (!bucketName) {
      throw new Error('GCS_BUCKET_NAME is not set');
    }

    const bucket = storage.bucket(bucketName);

    this.logger.info('bucket', {bucket});

    const files = await bucket.getFiles();
    this.logger.info('files', files);

    const file = bucket.file('sample.png');
    this.logger.info('file', {file});

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
