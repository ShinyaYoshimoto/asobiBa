import {Context} from 'hono';
import {requestBodySchema, responseBodySchema} from './schema';
import {PrismaClient} from '@prisma/client';
import {z} from 'zod';
import {loggerInterface} from '../../../../utils/logger';
import {AbstractHandler} from '../../../common/abstractHandler';
import {PhotoQueryInterface} from '../../../../modules/photo/photo.query';
import {PhotoQueryPostgres} from '../../../../modules/photo/photo.query.postgres';
import {TagQueryInterface} from '../../../../modules/photo/tag/tag.query';
import {TagQueryPostgres} from '../../../../modules/photo/tag/tag.query.postgres';
import {TagCommandInterface} from '../../../../modules/photo/tag/tag.command';
import {TagCommandPostgres} from '../../../../modules/photo/tag/tag.command.postgres';
import {Tag} from '../../../../modules/photo/tag/tag.entity';
import {PhotoCommandInterface} from '../../../../modules/photo/photo.command';
import {PhotoCommandPostgres} from '../../../../modules/photo/photo.command.postgres';

export class PhotosTagsPostHandler extends AbstractHandler {
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

      const result = await this.logic(requestBody.data);
      return c.json(result, 200);
    } catch (e) {
      this.logger.error('PhotosTagsPostHandler: Internal Server Error', e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  private logic = async (body: z.infer<typeof requestBodySchema>): Promise<z.infer<typeof responseBodySchema>> => {
    const {photo_id, tag_name} = body;

    const photo = await this.photoQuery.find({id: photo_id});
    if (!photo) {
      throw new Error('Photo not found');
    }

    const existingTag = await this.tagQuery.findByName({
      name: tag_name,
      accountId: 'c2e9e129-e6fd-407b-8b21-1f359d7c5b37',
    });
    this.logger.info('existingTag', {existingTag});
    const tag = existingTag ?? (await this.tagCommand.create(Tag.create({name: tag_name})));

    await this.photoCommand.addTag(photo, tag);

    return {
      id: tag.id(),
      name: tag.name(),
    };
  };
}
