import type {Context} from 'hono';
import type {HandQueryInterface} from '../../../modules/hand/domain/hand.query';
import {HandQueryRDB} from '../../../modules/hand/infrastructure/hand.query.rdb';
import type {loggerInterface} from '../../../utils/logger';
import {AbstractHandler} from '../../common/abstractHandler';

export class HandsGetHander extends AbstractHandler {
  private handQuery: HandQueryInterface;

  constructor(dep?: {logger?: loggerInterface; handQuery?: HandQueryInterface}) {
    super(dep);
    this.handQuery = dep?.handQuery ?? new HandQueryRDB();
  }

  execute = async (c: Context) => {
    try {
      const hands = await this.handQuery.loadAll();
      return c.json(
        {
          hands: hands.map((hand) => {
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
