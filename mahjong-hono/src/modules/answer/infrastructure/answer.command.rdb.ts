import {AnswerCommandInterface} from '../domain/answer.command';
import {AnswerEntity, AnswerSchema} from '../domain/answer.entity';
import {PrismaClient} from '../../../../prisma/client';

export class AnswerCommandRdb implements AnswerCommandInterface {
  constructor(private readonly prisma: PrismaClient) {}

  async register(answer: AnswerEntity): Promise<AnswerEntity> {
    const createdAnswer = await this.prisma.answer.create({
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
