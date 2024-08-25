import {z} from 'zod';

export const requestBodySchema = z.object({
  symbolCount: z
    .number({description: '符数 / 5飜以上は指定不要'})
    .min(20, '20符以上で入力してください')
    .max(110, '110符以下で入力してください')
    .optional(),
  fanCount: z.number({description: '飜数'}).min(1, '1飜以上で入力してください'),
});

export const responseBodySchema = z.object({
  startPlayer: z.object(
    {
      draw: z.object(
        {
          other: z.number({description: '子が支払う点数'}).min(500),
        },
        {description: 'ツモの場合'}
      ),
      // 平和ロンの場合はnull
      other: z.number({description: 'ロンの場合'}).min(1500).nullable(),
    },
    {description: '親の場合の点数'}
  ),
  other: z.object(
    {
      draw: z.object(
        {
          startPlayer: z.number({description: '親が支払う点数'}).min(500),
          other: z.number({description: '子が支払う点数'}).min(300),
        },
        {description: 'ツモの場合'}
      ),
      // 平和ロンの場合はnull
      other: z.number({description: 'ロンの場合'}).min(1000).nullable(),
    },
    {description: '子の場合の点数'}
  ),
});

// FIXME: 共通化してもいいかも？
export const errorResponseSchema = z.object({
  message: z.string(),
});
