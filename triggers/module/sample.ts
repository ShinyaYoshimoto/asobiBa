export class Sample {
  constructor(private readonly sample: string) {
    this.sample = sample;
  }

  public getSample(): string {
    return this.sample;
  }
}