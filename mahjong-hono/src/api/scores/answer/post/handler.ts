import {Context} from 'hono';
import {requestBodySchema} from './schema';
import {ScoreQueryInterface} from '../../../../modules/score/domain/score.query';
import {ScoreQueryOnMemory} from '../../../../modules/score/infrastructure/score.query.memory';
import {AnswerCommandInterface} from '../../../../modules/answer/domain/answer.command';
import {AnswerCommandSqlite} from '../../../../modules/answer/infrastructure/answer.command.sqlite';
import {PrismaClient} from '@prisma/client';
import {AnswerEntity} from '../../../../modules/answer/domain/answer.entity';

export class ScoresAnswerHandler {
  private readonly scoreQuery: ScoreQueryInterface;
  private readonly answerCommand: AnswerCommandInterface;
  private readonly prismaClient: PrismaClient;

  constructor(dep?: {scoreQuery?: ScoreQueryInterface; answerCommand?: AnswerCommandInterface}) {
    this.prismaClient = new PrismaClient();
    this.scoreQuery = dep?.scoreQuery ?? new ScoreQueryOnMemory();
    this.answerCommand = dep?.answerCommand ?? new AnswerCommandSqlite(this.prismaClient);
  }

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
          const isCorrect =
            requestBody.data.answer.score.startPlayer === 0 &&
            requestBody.data.answer.score.other === score.score.startPlayer.draw.other;

          await this.answerCommand
            .register(
              AnswerEntity.create({
                isStartPlayer: true,
                isDraw: true,
                fanCount: requestBody.data.question.fanCount,
                symbolCount: requestBody.data.question.symbolCount,
                isCorrect,
              })
            )
            .then(async () => {
              await this.prismaClient.$disconnect();
            })
            .catch(async e => {
              await this.prismaClient.$disconnect();
              throw e;
            });

          return c.json(
            {
              isCorrect,
            },
            200
          );
        } else {
          // ロン
          const isCorrect =
            requestBody.data.answer.score.startPlayer === 0 &&
            requestBody.data.answer.score.other === score.score.startPlayer.other;

          await this.answerCommand
            .register(
              AnswerEntity.create({
                isStartPlayer: true,
                isDraw: false,
                fanCount: requestBody.data.question.fanCount,
                symbolCount: requestBody.data.question.symbolCount,
                isCorrect,
              })
            )
            .then(async () => {
              await this.prismaClient.$disconnect();
            })
            .catch(async e => {
              await this.prismaClient.$disconnect();
              throw e;
            });

          return c.json(
            {
              isCorrect,
            },
            200
          );
        }
      } else {
        // 子
        if (requestBody.data.question.isDraw) {
          // ツモ
          const isCorrect =
            requestBody.data.answer.score.startPlayer === score.score.other.draw.startPlayer &&
            requestBody.data.answer.score.other === score.score.other.draw.other;

          await this.answerCommand
            .register(
              AnswerEntity.create({
                isStartPlayer: false,
                isDraw: true,
                symbolCount: requestBody.data.question.symbolCount,
                fanCount: requestBody.data.question.fanCount,
                isCorrect,
              })
            )
            .then(async () => {
              await this.prismaClient.$disconnect();
            })
            .catch(async e => {
              await this.prismaClient.$disconnect();
              throw e;
            });

          return c.json(
            {
              isCorrect,
            },
            200
          );
        } else {
          // ロン
          const isCorrect =
            requestBody.data.answer.score.startPlayer === score.score.startPlayer.other &&
            requestBody.data.answer.score.other === score.score.other.other;

          await this.answerCommand
            .register(
              AnswerEntity.create({
                isStartPlayer: false,
                isDraw: false,
                fanCount: requestBody.data.question.fanCount,
                symbolCount: requestBody.data.question.symbolCount,
                isCorrect,
              })
            )
            .then(async () => {
              await this.prismaClient.$disconnect();
            })
            .catch(async e => {
              await this.prismaClient.$disconnect();
              throw e;
            });

          return c.json(
            {
              isCorrect,
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
