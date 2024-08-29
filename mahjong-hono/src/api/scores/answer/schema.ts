import {z} from 'zod';

export const requestBodySchema = z.object({
  question: z.object({
    isStartPlayer: z.boolean(),
    isDraw: z.boolean(),
    symbolCount: z.number().min(20).max(100).optional(),
    fanCount: z.number().min(1),
  }),
  answer: z.object({
    score: z.object({
      startPlayer: z.number(),
      other: z.number(),
    }),
  }),
});

export const responseBodySchema = z.object({
  isCorrect: z.boolean(),
});
