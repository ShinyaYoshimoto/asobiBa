import {z} from 'zod';

export const AnswerSchema = z.object({
  id: z.string().optional(),
  isStartPlayer: z.boolean(),
  isDraw: z.boolean(),
  symbolCount: z.number().min(20).max(110).optional(),
  fanCount: z.number().min(1),
  isCorrect: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export class AnswerEntity {
  private constructor(private readonly data: z.infer<typeof AnswerSchema>) {}

  static create(answer: z.infer<typeof AnswerSchema>) {
    const data = AnswerSchema.parse(answer);
    return new AnswerEntity(data);
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
