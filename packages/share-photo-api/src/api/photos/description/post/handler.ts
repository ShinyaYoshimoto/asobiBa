import {Context} from 'hono';
import {requestBodySchema} from './schema';
import {PrismaClient} from '../../../../generated/client';
import {z} from 'zod';
import {loggerInterface} from '../../../../utils/logger';
import {AbstractHandler} from '../../../common/abstractHandler';
import {PhotoQueryInterface} from '../../../../modules/photo/photo.query';
import {PhotoQueryPostgres} from '../../../../modules/photo/photo.query.postgres';
import {PhotoCommandInterface} from '../../../../modules/photo/photo.command';
import {PhotoCommandPostgres} from '../../../../modules/photo/photo.command.postgres';

export class PhotosDescriptionPostHandler extends AbstractHandler {
  private readonly photoQuery: PhotoQueryInterface;
  private readonly prismaClient: PrismaClient;
  private readonly photoCommand: PhotoCommandInterface;
  constructor(dep?: {
    photoQuery?: PhotoQueryInterface;
    photoCommand?: PhotoCommandInterface;
    logger?: loggerInterface;
  }) {
    super(dep);
    this.prismaClient = new PrismaClient();
    this.photoQuery = dep?.photoQuery ?? new PhotoQueryPostgres(this.prismaClient);
    this.photoCommand = dep?.photoCommand ?? new PhotoCommandPostgres(this.prismaClient);
  }

  execute = async (c: Context) => {
    try {
      const requestBody = requestBodySchema.safeParse(await c.req.json());
      this.logger.info('PhotosDescriptionPostHandler: requestBody', requestBody);
      if (!requestBody.success) {
        this.logger.warn('bad request');
        return c.json({message: 'bad request'}, 400);
      }

      await this.logic(requestBody.data);
      return c.json({message: 'success'}, 200);
    } catch (e) {
      this.logger.error('PhotosDescriptionPostHandler: Internal Server Error', e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  private logic = async (body: z.infer<typeof requestBodySchema>): Promise<void> => {
    const {id, description} = body;

    const photo = await this.photoQuery.find({id});
    if (!photo) {
      throw new Error('Photo not found');
    }

    await this.photoCommand.updateDescription(photo, description);
  };
}
