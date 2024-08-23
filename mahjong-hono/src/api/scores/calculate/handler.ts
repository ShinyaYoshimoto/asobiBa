import { Context } from "hono";

export class ScoresCalculateHandler {
  handle = async (c: Context) => {
    const {symbolCount, fanCount} = await c.req.json();
    if (symbolCount < 20 || fanCount < 1) {
      return c.json({message: 'Symbol count must be 20 or more and fan count must be 1 or more'}, 400);
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
}