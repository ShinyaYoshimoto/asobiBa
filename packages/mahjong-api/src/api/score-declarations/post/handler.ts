import type {Context} from 'hono';
import type {z} from 'zod';
import {PrismaClient} from '../../../generated/client';
import type {AnswerCommandInterface} from '../../../modules/answer/domain/answer.command';
import {AnswerEntity} from '../../../modules/answer/domain/answer.entity';
import {AnswerCommandRdb} from '../../../modules/answer/infrastructure/answer.command.rdb';
import type {ScoreQueryInterface} from '../../../modules/score/domain/score.query';
import {ScoreQueryOnMemory} from '../../../modules/score/infrastructure/score.query.memory';
import type {loggerInterface} from '../../../utils/logger';
import {AbstractHandler} from '../../common/abstractHandler';
import {requestBodySchema, type responseBodySchema} from './schema';

export class ScoresDeclarationsPostHandler extends AbstractHandler {
  private readonly scoreQuery: ScoreQueryInterface;
  private readonly answerCommand: AnswerCommandInterface;
  private readonly prismaClient: PrismaClient;

  constructor(dep?: {
    scoreQuery?: ScoreQueryInterface;
    answerCommand?: AnswerCommandInterface;
    logger?: loggerInterface;
  }) {
    super(dep);
    this.prismaClient = new PrismaClient();
    this.scoreQuery = dep?.scoreQuery ?? new ScoreQueryOnMemory();
    this.answerCommand = dep?.answerCommand ?? new AnswerCommandRdb(this.prismaClient);
  }

  execute = async (c: Context) => {
    try {
      const requestBody = requestBodySchema.safeParse(await c.req.json());
      this.logger.info('ScoresAnswerHandler: requestBody', requestBody);
      if (!requestBody.success) {
        this.logger.warn('bad request');
        return c.json({message: 'bad request'}, 400);
      }

      const result = await this.logic(requestBody.data);
      return c.json(result, 200);
    } catch (e) {
      this.logger.error('ScoresAnswerHandler: Internal Server Error');
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  private logic = async (body: z.infer<typeof requestBodySchema>): Promise<z.infer<typeof responseBodySchema>> => {
    const score = await this.scoreQuery.findScore({
      fanCount: body.question.fanCount,
      symbolCount: body.question.symbolCount,
    });

    // TODO: 一旦、愚直に書いてるメソッド分けるなども検討
    if (body.question.isStartPlayer) {
      // 親
      if (body.question.isDraw) {
        // ツモ
        const isCorrect =
          body.answer.score.startPlayer === 0 && body.answer.score.other === score.score.startPlayer.draw.other;

        await this.answerCommand
          .register(
            AnswerEntity.create({
              isStartPlayer: true,
              isDraw: true,
              fanCount: body.question.fanCount,
              symbolCount: body.question.symbolCount,
              isCorrect,
            })
          )
          .then(async () => {
            await this.prismaClient.$disconnect();
          })
          .catch(async (e) => {
            this.logger.error(e);
            await this.prismaClient.$disconnect();
            throw e;
          });

        return {
          isCorrect,
          correctAnswer: {
            startPlayer: 0,
            other: score.score.startPlayer.draw.other,
          },
        };
      } else {
        // ロン
        const isCorrect =
          body.answer.score.startPlayer === 0 && body.answer.score.other === score.score.startPlayer.other;

        await this.answerCommand
          .register(
            AnswerEntity.create({
              isStartPlayer: true,
              isDraw: false,
              fanCount: body.question.fanCount,
              symbolCount: body.question.symbolCount,
              isCorrect,
            })
          )
          .then(async () => {
            await this.prismaClient.$disconnect();
          })
          .catch(async (e) => {
            this.logger.error(e);
            await this.prismaClient.$disconnect();
            throw e;
          });

        return {
          isCorrect,
          correctAnswer: {
            startPlayer: 0,
            other: score.score.startPlayer.other ?? 0,
          },
        };
      }
    } else {
      // 子
      if (body.question.isDraw) {
        // ツモ
        const isCorrect =
          body.answer.score.startPlayer === score.score.other.draw.startPlayer &&
          body.answer.score.other === score.score.other.draw.other;

        await this.answerCommand
          .register(
            AnswerEntity.create({
              isStartPlayer: false,
              isDraw: true,
              symbolCount: body.question.symbolCount,
              fanCount: body.question.fanCount,
              isCorrect,
            })
          )
          .then(async () => {
            await this.prismaClient.$disconnect();
          })
          .catch(async (e) => {
            this.logger.error(e);
            await this.prismaClient.$disconnect();
            throw e;
          });

        return {
          isCorrect,
          correctAnswer: {
            startPlayer: score.score.other.draw.startPlayer,
            other: score.score.other.draw.other,
          },
        };
      } else {
        // ロン
        const isCorrect =
          body.answer.score.startPlayer === score.score.other.other &&
          body.answer.score.other === score.score.other.other;

        await this.answerCommand
          .register(
            AnswerEntity.create({
              isStartPlayer: false,
              isDraw: false,
              fanCount: body.question.fanCount,
              symbolCount: body.question.symbolCount,
              isCorrect,
            })
          )
          .then(async () => {
            await this.prismaClient.$disconnect();
          })
          .catch(async (e) => {
            this.logger.error(e);
            await this.prismaClient.$disconnect();
            throw e;
          });

        return {
          isCorrect,
          correctAnswer: {
            startPlayer: score.score.other.other ?? 0,
            other: score.score.other.other ?? 0,
          },
        };
      }
    }
  };
}
