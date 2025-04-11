import {Tag} from './tag.entity';

export interface TagQueryInterface {
  list(): Promise<Tag[]>;
}
