import {z} from 'zod';

export const requestBodySchema = z.object({
  file_name: z.string(),
  tag_ids: z.array(z.string()),
  took_at: z.string().datetime(),
});
