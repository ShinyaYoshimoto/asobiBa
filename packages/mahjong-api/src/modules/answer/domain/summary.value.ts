import {z} from 'zod';

export const AnswerSummarySchema = z.object({
  isStartPlayer: z.boolean(),
  isDraw: z.boolean(),
  symbolCount: z.number().min(20).max(100).optional(),
  fanCount: z.number().min(1),
  isCorrect: z.boolean(),
  count: z.object({
    true: z.number(),
    false: z.number(),
  }),
});
