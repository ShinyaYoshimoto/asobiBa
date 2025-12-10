import {z} from 'zod';

export const scoreEntitySchema = z.object({
  fanCount: z.number({description: '飜数'}),
  symbolCount: z.number({description: '符数'}).optional(),
  score: z.object({
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
  }),
});
