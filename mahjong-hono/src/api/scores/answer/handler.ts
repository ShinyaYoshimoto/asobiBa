import {Context} from 'hono';
import {requestBodySchema} from './schema';
import {ScoreQueryInterface} from '../../../modules/score/domain/score.query';
import {ScoreQueryOnMemory} from '../../../modules/score/infrastructure/score.query.memory';

export class ScoresAnswerHandler {
  private readonly scoreQuery: ScoreQueryInterface;

  constructor(dep?: {scoreQuery?: ScoreQueryInterface}) {
    this.scoreQuery = dep?.scoreQuery ?? new ScoreQueryOnMemory();
  }

  // - [ ] Prismaでテーブルを作成する
  // - [ ] テーブルに回答を記録する
  // - [ ] テーブルに記録された回答を取得する
  // - [ ] 認証できるようにする
  handle = async (c: Context) => {
    try {
      const requestBody = await c.req.json();
      const validationResult = this.validate(requestBody);
      if (!validationResult.isValid) {
        return c.json({message: 'bad request'}, 400);
      }

      const score = await this.scoreQuery.findScore({
        // FIXME ここで型が効くようにならねば意味なし
        fanCount: requestBody.question.fanCount,
        symbolCount: requestBody.question.symbolCount,
      });

      // 一旦、愚直に書いてる
      // メソッド分けるなども検討
      if (requestBody.question.isStartPlayer) {
        if (requestBody.question.isDraw) {
          return c.json(
            {
              isCorrect:
                requestBody.answer.score.startPlayer === 0 &&
                requestBody.answer.score.other === score.score.startPlayer.draw.other,
            },
            200
          );
        } else {
          return c.json(
            {
              isCorrect:
                requestBody.answer.score.startPlayer === 0 &&
                requestBody.answer.score.other === score.score.startPlayer.other,
            },
            200
          );
        }
      } else {
        if (requestBody.question.isDraw) {
          return c.json(
            {
              isCorrect:
                requestBody.answer.score.startPlayer === score.score.other.draw.startPlayer &&
                requestBody.answer.score.other === score.score.other.draw.other,
            },
            200
          );
        } else {
          return c.json(
            {
              isCorrect:
                requestBody.answer.score.startPlayer === score.score.other &&
                requestBody.answer.score.other === score.score.other.other,
            },
            200
          );
        }
      }
    } catch (e) {
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  private validate = (body: typeof requestBodySchema): {isValid: boolean; errorMessage?: string} => {
    const result = requestBodySchema.safeParse(body);
    if (!result.success) {
      return {isValid: false, errorMessage: 'bad request'};
    }
    return {isValid: true};
  };
}
