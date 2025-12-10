import type {Context} from 'hono';
import type {z} from 'zod';
import {PrismaClient} from '../../../../generated/client';
import type {PhotoCommandInterface} from '../../../../modules/photo/photo.command';
import {PhotoCommandPostgres} from '../../../../modules/photo/photo.command.postgres';
import type {PhotoQueryInterface} from '../../../../modules/photo/photo.query';
import {PhotoQueryPostgres} from '../../../../modules/photo/photo.query.postgres';
import type {TagCommandInterface} from '../../../../modules/photo/tag/tag.command';
import {TagCommandPostgres} from '../../../../modules/photo/tag/tag.command.postgres';
import {Tag} from '../../../../modules/photo/tag/tag.entity';
import type {TagQueryInterface} from '../../../../modules/photo/tag/tag.query';
import {TagQueryPostgres} from '../../../../modules/photo/tag/tag.query.postgres';
import type {loggerInterface} from '../../../../utils/logger';
import {AbstractHandler} from '../../../common/abstractHandler';
import {requestBodySchema} from './schema';

export class PhotosTagsDeleteHandler extends AbstractHandler {
  private readonly photoQuery: PhotoQueryInterface;
  private readonly prismaClient: PrismaClient;
  private readonly tagQuery: TagQueryInterface;
  private readonly tagCommand: TagCommandInterface;
  private readonly photoCommand: PhotoCommandInterface;
  constructor(dep?: {
    photoQuery?: PhotoQueryInterface;
    tagQuery?: TagQueryInterface;
    tagCommand?: TagCommandInterface;
    photoCommand?: PhotoCommandInterface;
    logger?: loggerInterface;
  }) {
    super(dep);
    this.prismaClient = new PrismaClient();
    this.photoQuery = dep?.photoQuery ?? new PhotoQueryPostgres(this.prismaClient);
    this.tagQuery = dep?.tagQuery ?? new TagQueryPostgres(this.prismaClient);
    this.tagCommand = dep?.tagCommand ?? new TagCommandPostgres(this.prismaClient);
    this.photoCommand = dep?.photoCommand ?? new PhotoCommandPostgres(this.prismaClient);
  }

  execute = async (c: Context) => {
    try {
      const requestBody = requestBodySchema.safeParse(await c.req.json());
      this.logger.info('PhotosTagsPostHandler: requestBody', requestBody);
      if (!requestBody.success) {
        this.logger.warn('bad request');
        return c.json({message: 'bad request'}, 400);
      }

      await this.logic(requestBody.data);
      return c.json({message: 'success'}, 200);
    } catch (e) {
      this.logger.error('PhotosTagsPostHandler: Internal Server Error', e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  private logic = async (body: z.infer<typeof requestBodySchema>) => {
    const {photo_id, tag_id} = body;

    const photo = await this.photoQuery.find({id: photo_id});
    if (!photo) {
      throw new Error('Photo not found');
    }

    const targetTag = photo.tags().find(tag => tag.id === tag_id);
    if (!targetTag) {
      throw new Error('Tag not set');
    }

    await this.photoCommand.removeTag(photo, Tag.reconstruct(targetTag));
  };
}
