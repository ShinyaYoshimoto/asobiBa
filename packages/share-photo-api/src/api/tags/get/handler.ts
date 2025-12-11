import type {Context} from 'hono';
import type {TagQueryInterface} from '../../../modules/photo/tag/tag.query';
import {TagQueryPostgres} from '../../../modules/photo/tag/tag.query.postgres';
import type {loggerInterface} from '../../../utils/logger';
import {AbstractHandler} from '../../common/abstractHandler';

export class ListTagsGetHandler extends AbstractHandler {
  private readonly tagQuery: TagQueryInterface;

  constructor(dep?: {tagQuery?: TagQueryInterface; logger?: loggerInterface}) {
    super(dep);
    this.tagQuery = dep?.tagQuery ?? new TagQueryPostgres();
  }

  execute = async (c: Context) => {
    try {
      const tags = await this.tagQuery.list();
      return c.json(
        tags.map((tag) => ({id: tag.id(), name: tag.name()})),
        200
      );
    } catch (e) {
      // TODO: logging
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
