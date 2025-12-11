import { db } from '@asobiba/common';
import type {TagCommandInterface} from './tag.command';
import {Tag} from './tag.entity';

export class TagCommandPostgres implements TagCommandInterface {
  public async create(tag: Tag): Promise<Tag> {
    const createdTag = await db.tag.create({
      data: {
        // FIXME: 現状は固定値で入れておく。ごめん。
        accountId: 'c2e9e129-e6fd-407b-8b21-1f359d7c5b37',
        name: tag.name(),
      },
    });

    return Tag.reconstruct(createdTag);
  }
}
