import { z } from 'zod';

export const requestBodySchema = z.object({
  symbolCount: z.number(),
  fanCount: z.number(),
});

export const responseBodySchema = z.object({
  // 親
  startPlayer: z.object({
    // ツモ
    draw: z.object({
      // 基本null
      startPlayer: z.number().nullable(),
      other: z.number(),
    }),
    // ロン
    other: z.number(),
  }),
  // 子
  other: z.object({
    draw: z.object({
      startPlayer: z.number(),
      other: z.number(),
    }),
    other: z.number(),
  }),
});

// FIXME: 共通化してもいいかも？
export const errorResponseSchema = z.object({
  message: z.string(),
});