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
      console.log({severity: 'DEBUG', message: 'sample', traceId: 'hogehoge'});
      console.log({severity: 'INFO', message: 'sample', traceId: 'hogehoge'});
      console.log({severity: 'WARNING', message: 'sample', traceId: 'hogehoge'});
      console.log({severity: 'ERROR', message: 'sample', traceId: 'hogehoge'});
      console.log({severity: 'ALERT', message: 'sample', traceId: 'hogehoge'});
      if (!requestBody.success) {
        // TODO: logging
        console.log(JSON.stringify({severity: 'ERROR', payload: {message: 'bad request'}}));
        return c.json({message: 'bad request'}, 400);
      }

      const result = await this.logic(requestBody.data);
      return c.json(result, 200);
    } catch (e) {
      // TODO: logging
      console.log(e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };

  logic = async (body: z.infer<typeof requestBodySchema>): Promise<z.infer<typeof responseBodySchema>> => {
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
          body.answer.score.startPlayer === score.score.startPlayer.other &&
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
