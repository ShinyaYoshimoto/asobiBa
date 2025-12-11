import {Tag} from './tag.entity';

export interface TagQueryInterface {
  list(): Promise<Tag[]>;
  findByIds(param: {ids: string[]}): Promise<Tag[]>;
  findByName(param: {name: string, accountId: string}): Promise<Tag | undefined>;
}
