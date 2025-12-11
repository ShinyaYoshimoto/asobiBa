import { db } from '@asobiba/common';
import type {AnswerCommandInterface} from '../domain/answer.command';
import {AnswerEntity, AnswerSchema} from '../domain/answer.entity';

export class AnswerCommandRdb implements AnswerCommandInterface {
  async register(answer: AnswerEntity): Promise<AnswerEntity> {
    const createdAnswer = await db.answer.create({
      data: {
        isStartPlayer: answer.isStartPlayer(),
        isDraw: answer.isDraw(),
        fanCount: answer.fanCount(),
        symbolCount: answer.symbolCount(),
        isCorrect: answer.isCorrect(),
      },
    });

    return AnswerEntity.create(AnswerSchema.parse(createdAnswer));
  }
}
