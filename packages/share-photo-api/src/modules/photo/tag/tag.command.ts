import {Tag} from './tag.entity';

export interface TagCommandInterface {
  create(tag: Tag): Promise<Tag>;
}
