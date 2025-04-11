import {z} from 'zod';

export const requestBodySchema = z.object({
  photo_id: z.string(),
  tag_name: z.string(),
});

export const responseBodySchema = z.object({
  id: z.string(),
  name: z.string(),
});
