import {Context} from 'hono';
import {loggerInterface} from '../../../utils/logger';
import {AbstractHandler} from '../../common/abstractHandler';
import {PrismaClient} from '@prisma/client';
import {HandQueryInterface} from '../../../modules/hand/domain/hand.query';
import {HandQueryRDB} from '../../../modules/hand/infrastructure/hand.query.rdb';

export class HandsGetHander extends AbstractHandler {
  private prismaClient: PrismaClient;
  private handQuery: HandQueryInterface;

  constructor(dep?: {logger?: loggerInterface; handQuery?: HandQueryInterface}) {
    super(dep);
    this.prismaClient = new PrismaClient();
    this.handQuery = dep?.handQuery ?? new HandQueryRDB(this.prismaClient);
  }

  execute = async (c: Context) => {
    try {
      const hands = await this.handQuery.loadAll();
      return c.json(
        {
          hands: hands.map(hand => {
            return {
              id: hand.id(),
              name: hand.name(),
              nameKana: hand.nameKana(),
              fanCountForCall: hand.fanCountForCall(),
              fanCount: hand.fanCount(),
            };
          }),
        },
        200
      );
    } catch (e) {
      this.logger.error('Internal Server Error', e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
