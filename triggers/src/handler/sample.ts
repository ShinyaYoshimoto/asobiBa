import {Sample} from '../module/sample';

export class SampleHandler {
  public static async handle(event: any) {
    console.log(event, 'start event handler');

    const sample = new Sample('sample instance');
    console.log(sample.getSample(), 'end event handler');
  }
}
