import {AnswerEntity} from './answer.entity';

export interface AnswerQueryInterface {
  loadAll(): Promise<AnswerEntity[]>;
}
