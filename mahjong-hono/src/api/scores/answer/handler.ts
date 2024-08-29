import {Context} from 'hono';

export class ScoresAnswerHandler {
  constructor() {}

  handle = async (c: Context) => {
    console.log('not implemented');

    return c.json({isCorrect: true}, 200);
  };
}
