import {z} from 'zod';

export const responseBodySchema = z.object({
  answers: z.array(
    z.object({
      isStartPlayer: z.boolean(),
      isDraw: z.boolean(),
      fanCount: z.number(),
      isCorrect: z.boolean(),
      symbolCount: z.number().optional(),
      count: z.object({
        true: z.number(),
        false: z.number(),
      }),
    })
  ),
});
