import type {AnswerEntity} from './answer.entity';

export interface AnswerCommandInterface {
  register(answer: AnswerEntity): Promise<AnswerEntity>;
}
