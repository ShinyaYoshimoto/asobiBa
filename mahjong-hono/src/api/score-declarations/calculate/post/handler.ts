import type {Context} from 'hono';
import type {ScoreQueryInterface} from '../../../../modules/score/domain/score.query';
import {ScoreQueryOnMemory} from '../../../../modules/score/infrastructure/score.query.memory';
import type {loggerInterface} from '../../../../utils/logger';
import {AbstractHandler} from '../../../common/abstractHandler';
import {requestBodySchema} from './schema';

export class ScoresDeclarationsCalculatePostHandlerHandler extends AbstractHandler {
  private readonly scoreRepository: ScoreQueryInterface;

  constructor(dep?: {scoreRepository?: ScoreQueryInterface; logger?: loggerInterface}) {
    super(dep);
    this.scoreRepository = dep?.scoreRepository ?? new ScoreQueryOnMemory();
  }

  execute = async (c: Context) => {
    try {
      const {symbolCount, fanCount} = await c.req.json();

      const {isValid, errorMessage} = this.validate({symbolCount, fanCount});
      if (!isValid) {
        return c.json({message: errorMessage ?? ''}, 400);
      }

      const score = await this.scoreRepository.findScore({fanCount, symbolCount});

      return c.json(score, 200);
    } catch (_error) {
      return c.json({message: 'Internal server error'}, 500);
    }
  };

  private validate = (param: {fanCount: number; symbolCount?: number}): {isValid: boolean; errorMessage?: string} => {
    const {fanCount, symbolCount} = param;
    const result = requestBodySchema.safeParse({symbolCount, fanCount});

    if (fanCount < 5 && symbolCount === undefined) {
      this.logger.error('symbolCount is required when fanCount is less than 5', {fanCount, symbolCount});
      return {isValid: false, errorMessage: 'Symbol count must be 20 or more and fan count must be 1 or more'};
    }

    // バリデーションエラーなし
    if (result.success) {
      return {isValid: true};
    }

    // エラーサンプル
    // [
    //   {
    //     code: 'too_small',
    //     minimum: 20,
    //     type: 'number',
    //     inclusive: true,
    //     exact: false,
    //     message: '20符以上で入力してください',
    //     path: ['symbolCount'],
    //   },
    //   {
    //     code: 'too_small',
    //     minimum: 1,
    //     type: 'number',
    //     inclusive: true,
    //     exact: false,
    //     message: '1飜以上で入力してください',
    //     path: ['fanCount'],
    //   },
    // ];
    // result.error.errors.map(error => {
    // })
    // FIXME: 面倒なので一旦、一律でエラーを返す
    // TODO: logging
    return {isValid: false, errorMessage: 'Symbol count must be 20 or more and fan count must be 1 or more'};
  };
}
