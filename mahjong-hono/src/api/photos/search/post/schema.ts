import {z} from 'zod';

export const requestBodySchema = z.object({
  option: z.object({
    limit: z.number().min(1).max(20).default(20).optional(),
    date: z.string().optional(),
    tagId: z.string().optional(),
    lastId: z.string().optional(),
  }),
});

export const responseBodySchema = z.array(
  z.object({
    id: z.string(),
    url: z.string(),
    thumbnail_url: z.string(),
    date: z.string(),
    tags: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    ),
  })
);
