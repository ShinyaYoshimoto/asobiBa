import {z} from 'zod';

export const responseBodySchema = z.object({
  hands: z.array(
    z.object({
      id: z.string().openapi({description: '役ID'}),
      name: z.string().openapi({description: '役名'}),
      nameKana: z.string().openapi({description: '役名カナ'}),
      fanCount: z.number().openapi({description: '翻数'}),
      fanCountForCall: z.number().openapi({description: '鳴きあり時の翻数'}),
    })
  ),
});
