import {Context} from 'hono';
import {requestBodySchema, responseBodySchema} from './schema';
import {PrismaClient} from '../../../../../prisma/client';
import {z} from 'zod';
import {loggerInterface} from '../../../../utils/logger';
import {AbstractHandler} from '../../../common/abstractHandler';
import {PhotoQueryInterface} from '../../../../modules/photo/photo.query';
import {PhotoQueryPostgres} from '../../../../modules/photo/photo.query.postgres';

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
      this.logger.error('PhotosSearchPostHandler: Internal Server Error');
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

    return photos.map(photo => ({
      id: photo.id(),
      url: photo.fileName(),
      thumbnail_url: photo.fileName(),
      date: photo.date().toISOString(),
      tags: photo.tags(),
    }));
  };
}
