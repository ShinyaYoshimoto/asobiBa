import { db } from '@asobiba/common';
import {Tag} from './tag.entity';
import type {TagQueryInterface} from './tag.query';

export class TagQueryPostgres implements TagQueryInterface {
  public async list(): Promise<Tag[]> {
    const tags = await db.tag.findMany();
    return tags.map((tag) => Tag.reconstruct(tag));
  }

  public async findByIds(param: {ids: string[]}): Promise<Tag[]> {
    const {ids} = param;
    const tags = await db.tag.findMany({where: {id: {in: ids}}});
    return tags.map((tag) => Tag.reconstruct(tag));
  }

  public async findByName(param: {name: string; accountId: string}): Promise<Tag | undefined> {
    const {name, accountId} = param;

    const tag = await db.tag.findUnique({where: {accountId_name: {accountId, name}}});
    if (!tag) return;

    return Tag.reconstruct(tag);
  }
}
