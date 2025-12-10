import {z} from 'zod';

export const requestBodySchema = z.object({
  photo_id: z.string(),
  tag_id: z.string(),
});
