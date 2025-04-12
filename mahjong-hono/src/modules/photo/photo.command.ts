import {Photo} from './photo.entity';
import {Tag} from './tag/tag.entity';

export interface PhotoCommandInterface {
  addTag(photo: Photo, tag: Tag): Promise<Photo>;
  removeTag(photo: Photo, tag: Tag): Promise<Photo>;
}
