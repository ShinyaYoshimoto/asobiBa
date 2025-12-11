import {z} from 'zod';

export const TagSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export class Tag {
  private constructor(private readonly data: z.infer<typeof TagSchema>) {}

  public static create(tag: Omit<z.infer<typeof TagSchema>, 'id'>): Tag {
    return new Tag({id: crypto.randomUUID(), ...tag});
  }

  public static reconstruct(tag: z.infer<typeof TagSchema>): Tag {
    return new Tag(tag);
  }

  public id = () => this.data.id;
  public name = () => this.data.name;
}
