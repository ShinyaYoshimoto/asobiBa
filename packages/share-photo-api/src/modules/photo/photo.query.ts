import {Photo} from './photo.entity';

export interface PhotoQueryInterface {
  list(param: {limit: number; date: Date; tagId?: string; lastId?: string}): Promise<Photo[]>;
  find(param: {id: string}): Promise<Photo | undefined>;
}
