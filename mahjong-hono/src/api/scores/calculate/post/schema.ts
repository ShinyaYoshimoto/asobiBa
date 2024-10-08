import {z} from 'zod';
import {scoreEntitySchema} from '../../../../modules/score/domain/score.entity';

export const requestBodySchema = z.object({
  symbolCount: z
    .number({description: '符数 / 5飜以上は指定不要'})
    .min(20, '20符以上で入力してください')
    .max(110, '110符以下で入力してください')
    .optional()
    .openapi({default: 30}),
  fanCount: z.number({description: '飜数'}).min(1, '1飜以上で入力してください').openapi({default: 1}),
});

export const responseBodySchema = scoreEntitySchema;
