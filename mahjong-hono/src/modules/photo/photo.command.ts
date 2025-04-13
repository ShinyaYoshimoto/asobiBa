import {Photo} from './photo.entity';
import {Tag} from './tag/tag.entity';

export interface PhotoCommandInterface {
  create(photo: Photo): Promise<Photo>;
  addTag(photo: Photo, tag: Tag): Promise<Photo>;
  removeTag(photo: Photo, tag: Tag): Promise<Photo>;
}
