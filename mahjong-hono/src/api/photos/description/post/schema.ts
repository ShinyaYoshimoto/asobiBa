import {z} from 'zod';

export const requestBodySchema = z.object({
  id: z.string(),
  description: z.string(),
});
