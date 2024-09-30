import {Context} from 'hono';
import {AnswerQuerySqlite} from '../../../../../modules/answer/infrastructure/answer.query.sqlite';
import {PrismaClient} from '@prisma/client';
import {AnswerQueryInterface} from '../../../../../modules/answer/domain/answer.query';

export class ScoresAnswersSummariesHandler {
  private readonly answerQuery: AnswerQueryInterface;
  private readonly prismaClient: PrismaClient;

  constructor(dep?: {answerQuery?: AnswerQueryInterface}) {
    this.prismaClient = new PrismaClient();
    this.answerQuery = dep?.answerQuery ?? new AnswerQuerySqlite(this.prismaClient);
  }

  handle = async (c: Context) => {
    try {
      const answers = await this.answerQuery.loadSummary();
      return c.json({answers: answers.map(answer => ({...answer, count: answer.count}))}, 200);
    } catch (e) {
      // TODO: logging
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
