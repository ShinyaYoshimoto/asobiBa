import {z} from 'zod';

// FIXME: このモジュールで知っているべき内容ではない
import {responseBodySchema} from '../../../api/scores/calculate/schema';

export interface ScoreQueryInterface {
  findScore(params: {fanCount: number; symbolCount?: number}): Promise<z.infer<typeof responseBodySchema>>;
}
