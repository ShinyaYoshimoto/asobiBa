import {Context} from 'hono';
import {requestBodySchema, responseBodySchema} from './schema';
import {ScoreQueryInterface} from '../../../../modules/score/domain/score.query';
import {ScoreQueryOnMemory} from '../../../../modules/score/infrastructure/score.query.memory';
import {AnswerCommandInterface} from '../../../../modules/answer/domain/answer.command';
import {AnswerCommandSqlite} from '../../../../modules/answer/infrastructure/answer.command.sqlite';
import {PrismaClient} from '@prisma/client';
import {AnswerEntity} from '../../../../modules/answer/domain/answer.entity';
import {z} from 'zod';

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
        // TODO: logging
        return c.json({message: 'bad request'}, 400);
      }

      const result = await this.logic(requestBody.data);
      return c.json(result, 200);
    } catch (e) {
      // TODO: logging
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  logic = async (validatedBody: z.infer<typeof requestBodySchema>): Promise<z.infer<typeof responseBodySchema>> => {
    const score = await this.scoreQuery.findScore({
      fanCount: validatedBody.question.fanCount,
      symbolCount: validatedBody.question.symbolCount,
    });

    // TODO: 一旦、愚直に書いてるメソッド分けるなども検討
    if (validatedBody.question.isStartPlayer) {
      // 親
      if (validatedBody.question.isDraw) {
        // ツモ
        const isCorrect =
          validatedBody.answer.score.startPlayer === 0 &&
          validatedBody.answer.score.other === score.score.startPlayer.draw.other;

        await this.answerCommand
          .register(
            AnswerEntity.create({
              isStartPlayer: true,
              isDraw: true,
              fanCount: validatedBody.question.fanCount,
              symbolCount: validatedBody.question.symbolCount,
              isCorrect,
            })
          )
          .then(async () => {
            await this.prismaClient.$disconnect();
          })
          .catch(async e => {
            // TODO: logging
            await this.prismaClient.$disconnect();
            throw e;
          });

        return {
          isCorrect,
        };
      } else {
        // ロン
        const isCorrect =
          validatedBody.answer.score.startPlayer === 0 &&
          validatedBody.answer.score.other === score.score.startPlayer.other;

        await this.answerCommand
          .register(
            AnswerEntity.create({
              isStartPlayer: true,
              isDraw: false,
              fanCount: validatedBody.question.fanCount,
              symbolCount: validatedBody.question.symbolCount,
              isCorrect,
            })
          )
          .then(async () => {
            await this.prismaClient.$disconnect();
          })
          .catch(async e => {
            // TODO: logging
            await this.prismaClient.$disconnect();
            throw e;
          });

        return {
          isCorrect,
        };
      }
    } else {
      // 子
      if (validatedBody.question.isDraw) {
        // ツモ
        const isCorrect =
          validatedBody.answer.score.startPlayer === score.score.other.draw.startPlayer &&
          validatedBody.answer.score.other === score.score.other.draw.other;

        await this.answerCommand
          .register(
            AnswerEntity.create({
              isStartPlayer: false,
              isDraw: true,
              symbolCount: validatedBody.question.symbolCount,
              fanCount: validatedBody.question.fanCount,
              isCorrect,
            })
          )
          .then(async () => {
            await this.prismaClient.$disconnect();
          })
          .catch(async e => {
            // TODO: logging
            await this.prismaClient.$disconnect();
            throw e;
          });

        return {
          isCorrect,
        };
      } else {
        // ロン
        const isCorrect =
          validatedBody.answer.score.startPlayer === score.score.startPlayer.other &&
          validatedBody.answer.score.other === score.score.other.other;

        await this.answerCommand
          .register(
            AnswerEntity.create({
              isStartPlayer: false,
              isDraw: false,
              fanCount: validatedBody.question.fanCount,
              symbolCount: validatedBody.question.symbolCount,
              isCorrect,
            })
          )
          .then(async () => {
            await this.prismaClient.$disconnect();
          })
          .catch(async e => {
            // TODO: logging
            await this.prismaClient.$disconnect();
            throw e;
          });

        return {
          isCorrect,
        };
      }
    }
  };
}
