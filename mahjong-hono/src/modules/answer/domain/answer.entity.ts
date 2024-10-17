import {nullable, z} from 'zod';

export const AnswerSchema = z.object({
  id: z.string().optional(),
  isStartPlayer: z.boolean(),
  isDraw: z.boolean(),
  symbolCount: z.number().min(20).max(110).nullable().optional(),
  fanCount: z.number().min(1),
  isCorrect: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export class AnswerEntity {
  private constructor(private readonly data: z.infer<typeof AnswerSchema>) {}

  static create(answer: z.infer<typeof AnswerSchema>) {
    const symbolCount = answer.fanCount > 4 ? undefined : answer.symbolCount ?? undefined;
    const data = AnswerSchema.safeParse({...answer, symbolCount});

    if (data.success) {
      return new AnswerEntity(data.data);
    }
    throw new Error('Invalid answer');
  }

  static reconstruct(answer: z.infer<typeof AnswerSchema>) {
    if (!answer.id) {
      throw new Error('id is required');
    }
    return new AnswerEntity(answer);
  }

  // FIXME: これgetterっぽいのはやす形でほんまにええんか？
  id = () => this.data.id;
  isStartPlayer = () => this.data.isStartPlayer;
  isDraw = () => this.data.isDraw;
  symbolCount = () => this.data.symbolCount;
  fanCount = () => this.data.fanCount;
  isCorrect = () => this.data.isCorrect;
}
