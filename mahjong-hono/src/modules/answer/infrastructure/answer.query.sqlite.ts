import {AnswerQueryInterface} from '../domain/answer.query';
import {AnswerEntity, AnswerSchema} from '../domain/answer.entity';
import {PrismaClient} from '@prisma/client';
import {z} from 'zod';
import {AnswerSummarySchema} from '../domain/summary.value';

export class AnswerQuerySqlite implements AnswerQueryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  // FIXME: 一旦、雑に全件返している。この辺の対応はまたいつか
  async loadAll(): Promise<AnswerEntity[]> {
    const answers = await this.prisma.answer.findMany();

    // FIXME: createメソッドではないもの容易して、idが必須になるようにしたい気持ち
    return answers.map(answer => AnswerEntity.create(AnswerSchema.parse(answer)));
  }

  async loadSummary(): Promise<z.infer<typeof AnswerSummarySchema>[]> {
    const summaries = await this.prisma.answer.groupBy({
      by: ['isStartPlayer', 'isDraw', 'fanCount', 'symbolCount', 'isCorrect'],
      _count: {
        _all: true,
        isCorrect: true,
      },
    });

    // FIXME: isCorrectのtrue, falseをそれぞれカウントしたい
    return summaries.map(summary => ({
      isStartPlayer: summary.isStartPlayer,
      isDraw: summary.isDraw,
      fanCount: summary.fanCount,
      isCorrect: summary.isCorrect,
      symbolCount: summary.symbolCount === null ? undefined : summary.symbolCount,
      count: {
        true: summary._count.isCorrect,
        false: summary._count._all - summary._count.isCorrect,
      },
    }));
  }
}
