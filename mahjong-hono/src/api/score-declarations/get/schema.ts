import {z} from 'zod';

export const responseBodySchema = z.object({
  answers: z.array(
    z.object({
      id: z.string(),
      isCorrect: z.boolean(),
    })
  ),
});
