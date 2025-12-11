import {z} from 'zod';

export const requestBodySchema = z.object({
  tag_ids: z.array(z.string()).max(3).optional(),
});

export const responseBodySchema = z.object({
  url: z.string(),
});
