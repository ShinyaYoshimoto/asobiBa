import {AnswerQueryInterface} from '../domain/answer.query';
import {AnswerEntity, AnswerSchema} from '../domain/answer.entity';
import {PrismaClient} from '@prisma/client';
import {z} from 'zod';
import {AnswerSummarySchema} from '../domain/summary.value';
import {ArrayUtil} from '../../../utils/array';

export class AnswerQueryRdb implements AnswerQueryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  // FIXME: 一旦、雑に全件返している。この辺の対応はまたいつか
  async loadAll(): Promise<AnswerEntity[]> {
    const answers = await this.prisma.answer.findMany();
    return answers.map(answer => AnswerEntity.reconstruct(AnswerSchema.parse(answer)));
  }

  async loadSummary(): Promise<z.infer<typeof AnswerSummarySchema>[]> {
    const summaries = await this.prisma.answer.groupBy({
      by: ['isStartPlayer', 'isDraw', 'fanCount', 'symbolCount', 'isCorrect'],
      _count: {
        _all: true,
      },
    });

    const grouped = ArrayUtil.groupBy(
      summaries.map(summary => ({
        ...summary,
        key: `${summary.symbolCount}-${summary.fanCount}-${summary.isStartPlayer ? 'start' : 'notStart'}-${
          summary.isDraw ? 'draw' : 'notDraw'
        }`,
      })),
      'key'
    );

    return grouped.map(group => ({
      isStartPlayer: group.values[0].isStartPlayer,
      isDraw: group.values[0].isDraw,
      fanCount: group.values[0].fanCount,
      isCorrect: group.values[0].isCorrect,
      symbolCount: group.values[0].symbolCount === null ? undefined : group.values[0].symbolCount,
      count: {
        true: group.values.find(summary => summary.isCorrect)?._count._all ?? 0,
        false: group.values.find(summary => !summary.isCorrect)?._count._all ?? 0,
      },
    }));
  }
}
