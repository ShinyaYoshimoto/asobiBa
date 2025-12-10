import type {Context} from 'hono';
import type {z} from 'zod';
import {PrismaClient} from '../../../generated/client';
import type {PhotoCommandInterface} from '../../../modules/photo/photo.command';
import {PhotoCommandPostgres} from '../../../modules/photo/photo.command.postgres';
import {Photo} from '../../../modules/photo/photo.entity';
import type {TagQueryInterface} from '../../../modules/photo/tag/tag.query';
import {TagQueryPostgres} from '../../../modules/photo/tag/tag.query.postgres';
import type {loggerInterface} from '../../../utils/logger';
import {AbstractHandler} from '../../common/abstractHandler';
import {requestBodySchema} from './schema';

export class PhotosPostHandler extends AbstractHandler {
  private readonly prismaClient: PrismaClient;
  private readonly photoCommand: PhotoCommandInterface;
  private readonly tagQuery: TagQueryInterface;
  constructor(dep?: {photoCommand?: PhotoCommandInterface; tagQuery?: TagQueryInterface; logger?: loggerInterface}) {
    super(dep);
    this.prismaClient = new PrismaClient();
    this.photoCommand = dep?.photoCommand ?? new PhotoCommandPostgres(this.prismaClient);
    this.tagQuery = dep?.tagQuery ?? new TagQueryPostgres(this.prismaClient);
  }

  execute = async (c: Context) => {
    try {
      const requestBody = requestBodySchema.safeParse(await c.req.json());
      this.logger.info('PhotosPostHandler: requestBody', requestBody);
      if (!requestBody.success) {
        this.logger.warn('bad request');
        return c.json({message: 'bad request'}, 400);
      }

      await this.logic(requestBody.data);
      return c.json({message: 'success'}, 200);
    } catch (e) {
      this.logger.error('PhotosPostHandler: Internal Server Error', e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  private logic = async (body: z.infer<typeof requestBodySchema>): Promise<void> => {
    const {file_name, tag_ids, took_at} = body;

    const tags = await this.tagQuery.findByIds({ids: tag_ids});

    const newPhoto = Photo.create({
      fileName: file_name,
      date: new Date(took_at),
      tags: tags.map(tag => ({id: tag.id(), name: tag.name()})),
    });

    await this.photoCommand.create(newPhoto);
  };
}
