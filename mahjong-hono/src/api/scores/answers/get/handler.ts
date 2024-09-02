import {Context} from 'hono';
import {AnswerQuerySqlite} from '../../../../modules/answer/infrastructure/answer.query.sqlite';
import {PrismaClient} from '@prisma/client';
import {AnswerQueryInterface} from '../../../../modules/answer/domain/answer.query';

export class ScoresAnswersHandler {
  private readonly answerQuery: AnswerQueryInterface;
  private readonly prismaClient: PrismaClient;

  constructor(dep?: {answerQuery?: AnswerQueryInterface}) {
    this.prismaClient = new PrismaClient();
    this.answerQuery = dep?.answerQuery ?? new AnswerQuerySqlite(this.prismaClient);
  }

  handle = async (c: Context) => {
    try {
      const answers = await this.answerQuery.loadAll();
      return c.json(
        {
          answers: answers
            .filter(answer => !!answer.id())
            .map(answer => {
              // FIXME: undefinedとなりうるので、面倒だがここでチェックする
              const id = answer.id();
              if (!id) {
                throw new Error('Answer id is not defined');
              }
              return {id, isCorrect: answer.isCorrect()};
            }),
        },
        200
      );
    } catch (e) {
      console.log(e)
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
