import {Context} from 'hono';
import {AnswerQuerySqlite} from '../../../../../modules/answer/infrastructure/answer.query.sqlite';
import {PrismaClient} from '@prisma/client';
import {AnswerQueryInterface} from '../../../../../modules/answer/domain/answer.query';
import {basicLogger, loggerInterface} from '../../../../../utils/logger';

export class ScoresAnswersSummariesHandler {
  private readonly answerQuery: AnswerQueryInterface;
  private readonly prismaClient: PrismaClient;
  private readonly logger: loggerInterface;

  constructor(dep?: {answerQuery?: AnswerQueryInterface, logger?: loggerInterface}) {
    this.prismaClient = new PrismaClient();
    this.answerQuery = dep?.answerQuery ?? new AnswerQuerySqlite(this.prismaClient);
    this.logger = dep?.logger ?? new basicLogger();
  }

  handle = async (c: Context) => {
    try {
      const answers = await this.answerQuery.loadSummary();
      return c.json({answers: answers.map(answer => ({...answer, count: answer.count}))}, 200);
    } catch (e) {
      this.logger.error('Internal Server Error', e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
