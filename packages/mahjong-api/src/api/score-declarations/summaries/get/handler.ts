import type {Context} from 'hono';
import type {AnswerQueryInterface} from '../../../../modules/answer/domain/answer.query';
import {AnswerQueryRdb} from '../../../../modules/answer/infrastructure/answer.query.rdb';
import type {loggerInterface} from '../../../../utils/logger';
import {AbstractHandler} from '../../../common/abstractHandler';

export class ScoresDeclarationsSummariesGetHandler extends AbstractHandler {
  private readonly answerQuery: AnswerQueryInterface;

  constructor(dep?: {answerQuery?: AnswerQueryInterface; logger?: loggerInterface}) {
    super(dep);
    this.answerQuery = dep?.answerQuery ?? new AnswerQueryRdb();
  }

  execute = async (c: Context) => {
    try {
      const answers = await this.answerQuery.loadSummary();
      return c.json({answers: answers.map((answer) => ({...answer, count: answer.count}))}, 200);
    } catch (e) {
      this.logger.error('Internal Server Error', e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
