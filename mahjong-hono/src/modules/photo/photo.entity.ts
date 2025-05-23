import {z} from 'zod';

export const PhotoSchema = z.object({
  id: z.string(),
  fileName: z.string(),
  date: z.date(),
  tags: z.array(z.object({id: z.string(), name: z.string()})),
  description: z.string().optional(),
});

export class Photo {
  private constructor(private readonly data: z.infer<typeof PhotoSchema>) {}

  public static create(photo: Omit<z.infer<typeof PhotoSchema>, 'id'>): Photo {
    return new Photo({id: crypto.randomUUID(), ...photo});
  }

  public static reconstruct(photo: z.infer<typeof PhotoSchema>): Photo {
    if (!photo.id) {
      throw new Error('Invalid photo');
    }
    return new Photo(photo);
  }

  public id = () => this.data.id;
  public fileName = () => this.data.fileName;
  public date = () => this.data.date;
  public tags = () => this.data.tags;
  public description = () => this.data.description;
}
