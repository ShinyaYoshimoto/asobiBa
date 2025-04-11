import {TagQueryInterface} from './tag.query';
import {PrismaClient} from '@prisma/client';
import {Tag} from './tag.entity';

export class TagQueryPostgres implements TagQueryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  public async list(): Promise<Tag[]> {
    const tags = await this.prisma.tag.findMany();
    return tags.map(tag => Tag.reconstruct(tag));
  }
}
