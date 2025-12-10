import {z} from 'zod';
import {AnswerEntity} from './answer.entity';
import {AnswerSummarySchema} from './summary.value';

export interface AnswerQueryInterface {
  loadAll(): Promise<AnswerEntity[]>;
  loadSummary(): Promise<z.infer<typeof AnswerSummarySchema>[]>;
}
