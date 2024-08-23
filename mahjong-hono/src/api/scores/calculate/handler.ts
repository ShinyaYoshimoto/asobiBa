import {Context} from 'hono';
import {requestBodySchema} from './schema';

export class ScoresCalculateHandler {
  handle = async (c: Context) => {
    const {symbolCount, fanCount} = await c.req.json();

    const {isValid, errorMessage} = this.validate(symbolCount, fanCount);
    if (!isValid) {
      return c.json({message: errorMessage ?? ''}, 400);
    }

    // FIXME: 30符1飜の値を決め打ち
    return c.json(
      {
        startPlayer: {
          draw: {
            startPlayer: null,
            other: 500,
          },
          other: 1500,
        },
        other: {
          draw: {
            startPlayer: 500,
            other: 300,
          },
          other: 1000,
        },
      },
      200
    );
  };

  private validate = (symbolCount: number, fanCount: number): {isValid: boolean; errorMessage?: string} => {
    const result = requestBodySchema.safeParse({symbolCount, fanCount});

    // バリデーションエラーなし
    if (result.success) {
      return {isValid: true};
    }

    // エラーサンプル
    // [
    //   {
    //     code: 'too_small',
    //     minimum: 20,
    //     type: 'number',
    //     inclusive: true,
    //     exact: false,
    //     message: '20符以上で入力してください',
    //     path: ['symbolCount'],
    //   },
    //   {
    //     code: 'too_small',
    //     minimum: 1,
    //     type: 'number',
    //     inclusive: true,
    //     exact: false,
    //     message: '1飜以上で入力してください',
    //     path: ['fanCount'],
    //   },
    // ];
    // result.error.errors.map(error => {
    // })
    // FIXME: 面倒なので一旦、一律でエラーを返す
    return {isValid: false, errorMessage: 'Symbol count must be 20 or more and fan count must be 1 or more'};
  };
}
