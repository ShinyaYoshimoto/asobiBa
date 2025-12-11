import type {Photo} from './photo.entity';
import type {Tag} from './tag/tag.entity';

export interface PhotoCommandInterface {
  create(photo: Photo): Promise<Photo>;
  addTag(photo: Photo, tag: Tag): Promise<Photo>;
  removeTag(photo: Photo, tag: Tag): Promise<Photo>;
  updateDescription(photo: Photo, description: string): Promise<Photo>;
}
