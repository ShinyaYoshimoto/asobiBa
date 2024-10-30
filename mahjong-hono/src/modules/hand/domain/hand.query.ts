import {Hand} from './hand.entity';

export interface HandQueryInterface {
  loadAll(): Promise<Hand[]>;
}
