import {Context} from 'hono';
import {PrismaClient} from '../../../generated/client';
import {AbstractHandler} from '../../common/abstractHandler';
import {loggerInterface} from '../../../utils/logger';
import {TagQueryInterface} from '../../../modules/photo/tag/tag.query';
import {TagQueryPostgres} from '../../../modules/photo/tag/tag.query.postgres';

export class ListTagsGetHandler extends AbstractHandler {
  private readonly tagQuery: TagQueryInterface;
  private readonly prismaClient: PrismaClient;

  constructor(dep?: {tagQuery?: TagQueryInterface; logger?: loggerInterface}) {
    super(dep);
    this.prismaClient = new PrismaClient();
    this.tagQuery = dep?.tagQuery ?? new TagQueryPostgres(this.prismaClient);
  }

  execute = async (c: Context) => {
    try {
      const tags = await this.tagQuery.list();
      return c.json(
        tags.map(tag => ({id: tag.id(), name: tag.name()})),
        200
      );
    } catch (e) {
      // TODO: logging
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
