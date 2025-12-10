import {z} from 'zod';

export const HandSchema = z.object({
  id: z.string(),
  name: z.string(),
  nameKana: z.string(),
  fanCountForCall: z.number().min(1),
  fanCount: z.number().min(1),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export class Hand {
  private constructor(private readonly data: z.infer<typeof HandSchema>) {}

  public static reconstruct(hand: z.infer<typeof HandSchema>): Hand {
    if (!hand.id) {
      throw new Error('Invalid hand');
    }
    return new Hand(hand);
  }

  public id = () => this.data.id;
  public name = () => this.data.name;
  public nameKana = () => this.data.nameKana;
  public fanCountForCall = () => this.data.fanCountForCall;
  public fanCount = () => this.data.fanCount;
}
