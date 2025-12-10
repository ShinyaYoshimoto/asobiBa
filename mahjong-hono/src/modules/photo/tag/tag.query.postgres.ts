import type {PrismaClient} from '../../../generated/client';
import {Tag} from './tag.entity';
import type {TagQueryInterface} from './tag.query';

export class TagQueryPostgres implements TagQueryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  public async list(): Promise<Tag[]> {
    const tags = await this.prisma.tag.findMany();
    return tags.map(tag => Tag.reconstruct(tag));
  }

  public async findByIds(param: {ids: string[]}): Promise<Tag[]> {
    const {ids} = param;
    const tags = await this.prisma.tag.findMany({where: {id: {in: ids}}});
    return tags.map(tag => Tag.reconstruct(tag));
  }

  public async findByName(param: {name: string; accountId: string}): Promise<Tag | undefined> {
    const {name, accountId} = param;

    const tag = await this.prisma.tag.findUnique({where: {accountId_name: {accountId, name}}});
    if (!tag) return;

    return Tag.reconstruct(tag);
  }
}
