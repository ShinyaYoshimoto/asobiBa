import type {Context} from 'hono';
import {PrismaClient} from '../../../generated/client';
import type {AnswerQueryInterface} from '../../../modules/answer/domain/answer.query';
import {AnswerQueryRdb} from '../../../modules/answer/infrastructure/answer.query.rdb';
import type {loggerInterface} from '../../../utils/logger';
import {AbstractHandler} from '../../common/abstractHandler';

export class ScoresDeclarationsGetHandler extends AbstractHandler {
  private readonly answerQuery: AnswerQueryInterface;
  private readonly prismaClient: PrismaClient;

  constructor(dep?: {answerQuery?: AnswerQueryInterface; logger?: loggerInterface}) {
    super(dep);
    this.prismaClient = new PrismaClient();
    this.answerQuery = dep?.answerQuery ?? new AnswerQueryRdb(this.prismaClient);
  }

  execute = async (c: Context) => {
    try {
      const answers = await this.answerQuery.loadAll();
      return c.json(
        {
          answers: answers
            .filter((answer) => !!answer.id())
            .map((answer) => {
              // FIXME: undefinedとなりうるので、面倒だがここでチェックする
              const id = answer.id();
              if (!id) {
                // TODO: logging
                throw new Error('Answer id is not defined');
              }
              return {id, isCorrect: answer.isCorrect()};
            }),
        },
        200
      );
    } catch (e) {
      // TODO: logging
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
