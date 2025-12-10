import {z} from 'zod';

export const responseBodySchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
  })
);
