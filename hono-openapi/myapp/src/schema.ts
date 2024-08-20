import {z} from '@hono/zod-openapi';

export const ErrorSchema = z.object({
  code: z.number().openapi({
    example: 400,
  }),
  message: z.string().openapi({
    example: 'Bad Request',
  }),
});

export const PrefectureParamSchema = z.object({
  prefectureId: z
    .string()
    .min(2)
    .max(2)
    .openapi({
      param: {
        name: 'prefectureId',
        in: 'path',
      },
      example: '01',
    }),
});

export const PrefectureSchema = z
  .object({
    name: z.string(),
    kana: z.string(),
    prefectureId: z.string(),
  })
  .openapi('Prefecture');

export const PrefecturesSchema = z.array(PrefectureSchema);
