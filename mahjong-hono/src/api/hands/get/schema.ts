import {z} from 'zod';

export const responseBodySchema = z.object({
  hands: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      nameKana: z.string(),
      fanCount: z.number(),
      fanCountForCall: z.number(),
    })
  ),
});
