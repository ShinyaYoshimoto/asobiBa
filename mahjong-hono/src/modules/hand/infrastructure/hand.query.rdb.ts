import type {PrismaClient} from '../../../generated/client';
import {Hand} from '../domain/hand.entity';
import type {HandQueryInterface} from '../domain/hand.query';

export class HandQueryRDB implements HandQueryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  public async loadAll(): Promise<Hand[]> {
    const hands = await this.prisma.hand.findMany();
    return hands.map(hand => Hand.reconstruct(hand));
  }
}
