import {AnswerQueryInterface} from '../domain/answer.query';
import {AnswerEntity, AnswerSchema} from '../domain/answer.entity';
import {PrismaClient} from '@prisma/client';

export class AnswerQuerySqlite implements AnswerQueryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  // FIXME: 一旦、雑に全件返している。この辺の対応はまたいつか
  async loadAll(): Promise<AnswerEntity[]> {
    const answers = await this.prisma.answer.findMany();

    // FIXME: createメソッドではないもの容易して、idが必須になるようにしたい気持ち
    return answers.map(answer => AnswerEntity.create(AnswerSchema.parse(answer)));
  }
}
