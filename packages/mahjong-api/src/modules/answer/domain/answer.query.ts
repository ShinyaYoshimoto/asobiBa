import type {z} from 'zod';
import type {AnswerEntity} from './answer.entity';
import type {AnswerSummarySchema} from './summary.value';

export interface AnswerQueryInterface {
  loadAll(): Promise<AnswerEntity[]>;
  loadSummary(): Promise<z.infer<typeof AnswerSummarySchema>[]>;
}
