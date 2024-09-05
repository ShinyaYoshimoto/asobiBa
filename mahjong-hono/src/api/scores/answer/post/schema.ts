import {z} from 'zod';

export const requestBodySchema = z.object({
  question: z.object({
    isStartPlayer: z.boolean({description: '親である'}).openapi({default: false}),
    isDraw: z.boolean({description: 'ツモである'}).openapi({default: true}),
    symbolCount: z
      .number({description: '符数'})
      .min(20, '符数は20以上です')
      .max(110, '符数は110以下です')
      .optional()
      .openapi({default: 30}),
    fanCount: z.number({description: '翻数'}).min(1, '翻数は1以上です').openapi({default: 1}),
  }),
  answer: z.object({
    score: z.object({
      startPlayer: z.number({description: '親の支払い. 支払いがない場合は0を指定してください'}).openapi({default: 500}),
      other: z.number({description: '子の支払い. 支払いがない場合は0を指定してください'}).openapi({default: 300}),
    }),
  }),
});

export const responseBodySchema = z.object({
  isCorrect: z.boolean(),
});
