import {z} from 'zod';

import {scoreEntitySchema} from './score.entity';

export interface ScoreQueryInterface {
  findScore(params: {fanCount: number; symbolCount?: number}): Promise<z.infer<typeof scoreEntitySchema>>;
}
