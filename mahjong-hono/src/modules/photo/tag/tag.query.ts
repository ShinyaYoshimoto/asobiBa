import {Tag} from './tag.entity';

export interface TagQueryInterface {
  list(): Promise<Tag[]>;
  findByName(param: {name: string, accountId: string}): Promise<Tag | undefined>;
}
