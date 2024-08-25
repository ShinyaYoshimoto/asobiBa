import {Context} from 'hono';
import {requestBodySchema, responseBodySchema} from './schema';

export class ScoresCalculateHandler {
  handle = async (c: Context) => {
    try {
      const {symbolCount, fanCount} = await c.req.json();

      const {isValid, errorMessage} = this.validate(symbolCount, fanCount);
      if (!isValid) {
        return c.json({message: errorMessage ?? ''}, 400);
      }

      const score = this.findScore(symbolCount, fanCount);

      return c.json(score, 200);
    } catch (error) {
      return c.json({message: 'Internal server error'}, 500);
    }
  };

  private validate = (symbolCount: number, fanCount: number): {isValid: boolean; errorMessage?: string} => {
    const result = requestBodySchema.safeParse({ symbolCount, fanCount });
    
    if (fanCount < 5 && symbolCount === null) {
      return {isValid: false, errorMessage: '5飜未満は指定が必要'};
    }

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

  private findScore = (symbolCount: number, fanCount: number) => {
    const score = scoreDef.find(
      score =>
        // 13飜以上は13飜として扱う
        (fanCount > 13 ? score.fanCount === 13 : score.fanCount === fanCount) &&
        // 5飜以上は飜数が一致するものを返す
        // FIXME: 3飜かつ70符以上は、5飜として扱う
        // FIXME: 4飜かつ40符以上は、5飜として扱う
        (fanCount > 4 ? true : score.symbolCount === symbolCount)
    );
    if (!score) {
      throw new Error('Score not found');
    }
    return responseBodySchema.parse(score.score);
  };
}

// FIXME: Repository
// 110符まで対応
const scoreDef = [
  // 1飜
  {
    symbolCount: 30,
    fanCount: 1,
    score: {
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
  },
  {
    symbolCount: 40,
    fanCount: 1,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 700,
        },
        other: 2000,
      },
      other: {
        draw: {
          startPlayer: 700,
          other: 400,
        },
        other: 1300,
      },
    },
  },
  {
    symbolCount: 50,
    fanCount: 1,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 800,
        },
        other: 2400,
      },
      other: {
        draw: {
          startPlayer: 800,
          other: 400,
        },
        other: 1600,
      },
    },
  },
  {
    symbolCount: 60,
    fanCount: 1,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1000,
        },
        other: 2900,
      },
      other: {
        draw: {
          startPlayer: 1000,
          other: 500,
        },
        other: 2000,
      },
    },
  },
  {
    symbolCount: 70,
    fanCount: 1,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1200,
        },
        other: 3400,
      },
      other: {
        draw: {
          startPlayer: 1200,
          other: 600,
        },
        other: 2300,
      },
    },
  },
  {
    symbolCount: 80,
    fanCount: 1,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1300,
        },
        other: 3900,
      },
      other: {
        draw: {
          startPlayer: 1300,
          other: 700,
        },
        other: 2600,
      },
    },
  },
  {
    symbolCount: 90,
    fanCount: 1,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1500,
        },
        other: 4400,
      },
      other: {
        draw: {
          startPlayer: 1500,
          other: 800,
        },
        other: 2900,
      },
    },
  },
  {
    symbolCount: 100,
    fanCount: 1,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1600,
        },
        other: 4800,
      },
      other: {
        draw: {
          startPlayer: 1600,
          other: 800,
        },
        other: 3200,
      },
    },
  },
  {
    symbolCount: 110,
    fanCount: 1,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1800,
        },
        other: 5300,
      },
      other: {
        draw: {
          startPlayer: 1800,
          other: 900,
        },
        other: 3600,
      },
    },
  },
  // 2飜
  {
    symbolCount: 20,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 700,
        },
        other: null,
      },
      other: {
        draw: {
          startPlayer: 700,
          other: 400,
        },
        other: null,
      },
    },
  },
  {
    symbolCount: 25,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 800,
        },
        other: 2400,
      },
      other: {
        draw: {
          startPlayer: 800,
          other: 400,
        },
        other: 1600,
      },
    },
  },
  {
    symbolCount: 30,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1000,
        },
        other: 2900,
      },
      other: {
        draw: {
          startPlayer: 1000,
          other: 500,
        },
        other: 2000,
      },
    },
  },
  {
    symbolCount: 40,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1300,
        },
        other: 3900,
      },
      other: {
        draw: {
          startPlayer: 1300,
          other: 700,
        },
        other: 2600,
      },
    },
  },
  {
    symbolCount: 50,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1600,
        },
        other: 4800,
      },
      other: {
        draw: {
          startPlayer: 1600,
          other: 800,
        },
        other: 3200,
      },
    },
  },
  {
    symbolCount: 60,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 2000,
        },
        other: 5800,
      },
      other: {
        draw: {
          startPlayer: 2000,
          other: 1000,
        },
        other: 3900,
      },
    },
  },
  {
    symbolCount: 70,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 2300,
        },
        other: 6800,
      },
      other: {
        draw: {
          startPlayer: 2300,
          other: 1200,
        },
        other: 4500,
      },
    },
  },
  {
    symbolCount: 80,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 2600,
        },
        other: 7800,
      },
      other: {
        draw: {
          startPlayer: 2600,
          other: 1300,
        },
        other: 5200,
      },
    },
  },
  {
    symbolCount: 90,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 2900,
        },
        other: 8700,
      },
      other: {
        draw: {
          startPlayer: 2900,
          other: 1500,
        },
        other: 5800,
      },
    },
  },
  {
    symbolCount: 100,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 3200,
        },
        other: 9600,
      },
      other: {
        draw: {
          startPlayer: 3200,
          other: 1600,
        },
        other: 6400,
      },
    },
  },
  {
    symbolCount: 110,
    fanCount: 2,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 3600,
        },
        other: 10600,
      },
      other: {
        draw: {
          startPlayer: 3600,
          other: 1800,
        },
        other: 7100,
      },
    },
  },
  // 3飜
  {
    symbolCount: 20,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1300,
        },
        other: null,
      },
      other: {
        draw: {
          startPlayer: 1300,
          other: 700,
        },
        other: null,
      },
    },
  },
  {
    symbolCount: 25,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 1600,
        },
        other: 4800,
      },
      other: {
        draw: {
          startPlayer: 1600,
          other: 800,
        },
        other: 3200,
      },
    },
  },
  {
    symbolCount: 30,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 2000,
        },
        other: 5800,
      },
      other: {
        draw: {
          startPlayer: 2000,
          other: 1000,
        },
        other: 3900,
      },
    },
  },
  {
    symbolCount: 40,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 2600,
        },
        other: 7800,
      },
      other: {
        draw: {
          startPlayer: 2600,
          other: 1300,
        },
        other: 5200,
      },
    },
  },
  {
    symbolCount: 50,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 3200,
        },
        other: 9600,
      },
      other: {
        draw: {
          startPlayer: 3200,
          other: 1600,
        },
        other: 6400,
      },
    },
  },
  {
    symbolCount: 60,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 3900,
        },
        other: 11600,
      },
      other: {
        draw: {
          startPlayer: 3900,
          other: 2000,
        },
        other: 7700,
      },
    },
  },
  {
    symbolCount: 70,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 80,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 90,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 100,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 110,
    fanCount: 3,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  // 4飜
  {
    symbolCount: 20,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 2600,
        },
        other: null,
      },
      other: {
        draw: {
          startPlayer: 2600,
          other: 1300,
        },
        other: null,
      },
    },
  },
  {
    symbolCount: 25,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 3200,
        },
        other: 9600,
      },
      other: {
        draw: {
          startPlayer: 3200,
          other: 1600,
        },
        other: 6400,
      },
    },
  },
  {
    symbolCount: 30,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 3900,
        },
        other: 11600,
      },
      other: {
        draw: {
          startPlayer: 3900,
          other: 2000,
        },
        other: 7700,
      },
    },
  },
  {
    symbolCount: 40,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 50,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 60,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 70,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 80,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 90,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 100,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  {
    symbolCount: 110,
    fanCount: 4,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  // 5飜
  {
    fanCount: 5,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 4000,
        },
        other: 12000,
      },
      other: {
        draw: {
          startPlayer: 4000,
          other: 2000,
        },
        other: 8000,
      },
    },
  },
  // 6飜
  {
    fanCount: 6,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 6000,
        },
        other: 18000,
      },
      other: {
        draw: {
          startPlayer: 6000,
          other: 3000,
        },
        other: 12000,
      },
    },
  },
  // 7飜
  {
    fanCount: 7,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 6000,
        },
        other: 18000,
      },
      other: {
        draw: {
          startPlayer: 6000,
          other: 3000,
        },
        other: 12000,
      },
    },
  },
  // 8飜
  {
    fanCount: 8,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 8000,
        },
        other: 24000,
      },
      other: {
        draw: {
          startPlayer: 8000,
          other: 4000,
        },
        other: 16000,
      },
    },
  },
  // 9飜
  {
    fanCount: 9,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 8000,
        },
        other: 24000,
      },
      other: {
        draw: {
          startPlayer: 8000,
          other: 4000,
        },
        other: 16000,
      },
    },
  },
  // 10飜
  {
    fanCount: 10,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 8000,
        },
        other: 24000,
      },
      other: {
        draw: {
          startPlayer: 8000,
          other: 4000,
        },
        other: 16000,
      },
    },
  },
  // 11飜
  {
    fanCount: 11,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 12000,
        },
        other: 36000,
      },
      other: {
        draw: {
          startPlayer: 12000,
          other: 6000,
        },
        other: 24000,
      },
    },
  },
  // 12飜
  {
    fanCount: 12,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 12000,
        },
        other: 36000,
      },
      other: {
        draw: {
          startPlayer: 12000,
          other: 6000,
        },
        other: 24000,
      },
    },
  },
  // 13飜以上
  {
    fanCount: 13,
    score: {
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 16000,
        },
        other: 48000,
      },
      other: {
        draw: {
          startPlayer: 16000,
          other: 8000,
        },
        other: 32000,
      },
    },
  },
];
