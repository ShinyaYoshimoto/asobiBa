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
      const requestBody = requestBodySchema.safeParse(await c.req.json());
      if (!requestBody.success) {
        return c.json({message: 'bad request'}, 400);
      }

      const score = await this.scoreQuery.findScore({
        fanCount: requestBody.data.question.fanCount,
        symbolCount: requestBody.data.question.symbolCount,
      });

      // 一旦、愚直に書いてる
      // メソッド分けるなども検討
      if (requestBody.data.question.isStartPlayer) {
        // 親
        if (requestBody.data.question.isDraw) {
          // ツモ
          return c.json(
            {
              isCorrect:
                requestBody.data.answer.score.startPlayer === 0 &&
                requestBody.data.answer.score.other === score.score.startPlayer.draw.other,
            },
            200
          );
        } else {
          // ロン
          return c.json(
            {
              isCorrect:
                requestBody.data.answer.score.startPlayer === 0 &&
                requestBody.data.answer.score.other === score.score.startPlayer.other,
            },
            200
          );
        }
      } else {
        // 子
        if (requestBody.data.question.isDraw) {
          // ツモ
          return c.json(
            {
              isCorrect:
                requestBody.data.answer.score.startPlayer === score.score.other.draw.startPlayer &&
                requestBody.data.answer.score.other === score.score.other.draw.other,
            },
            200
          );
        } else {
          // ロン
          return c.json(
            {
              isCorrect:
                requestBody.data.answer.score.startPlayer === score.score.startPlayer.other &&
                requestBody.data.answer.score.other === score.score.other.other,
            },
            200
          );
        }
      }
    } catch (e) {
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
