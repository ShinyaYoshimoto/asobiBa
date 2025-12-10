import type {PrismaClient} from '../../../generated/client';
import type {TagCommandInterface} from './tag.command';
import {Tag} from './tag.entity';

export class TagCommandPostgres implements TagCommandInterface {
  constructor(private readonly prisma: PrismaClient) {}

  public async create(tag: Tag): Promise<Tag> {
    const createdTag = await this.prisma.tag.create({
      data: {
        // FIXME: 現状は固定値で入れておく。ごめん。
        accountId: 'c2e9e129-e6fd-407b-8b21-1f359d7c5b37',
        name: tag.name(),
      },
    });

    return Tag.reconstruct(createdTag);
  }
}
