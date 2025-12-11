import { db } from '@asobiba/common';
import {Hand} from '../domain/hand.entity';
import type {HandQueryInterface} from '../domain/hand.query';

export class HandQueryRDB implements HandQueryInterface {
  public async loadAll(): Promise<Hand[]> {
    const hands = await db.hand.findMany();
    return hands.map((hand) => Hand.reconstruct(hand));
  }
}
