import {z} from 'zod';
import {ScoreQueryInterface} from '../domain/score.query';

import {scoreEntitySchema} from '../domain/score.entity';

export class ScoreQueryOnMemory implements ScoreQueryInterface {
  findScore = async (params: {fanCount: number; symbolCount?: number}): Promise<z.infer<typeof scoreEntitySchema>> => {
    const {fanCount, symbolCount} = params;
    const score = scoreDef.find(
      score =>
        // 飜数の条件
        // - 13飜以上は13飜として扱う
        // - 4飜かつ40符以上は、5飜として扱う
        // - 3飜かつ70符以上は、5飜として扱う
        (fanCount > 13
          ? score.fanCount === 13
          : fanCount === 4 && symbolCount && symbolCount >= 40
          ? score.fanCount === 5
          : fanCount === 3 && symbolCount && symbolCount >= 70
          ? score.fanCount === 5
          : score.fanCount === fanCount) &&
        // 符数の条件
        // - 5飜以上は飜数が一致するものを返す
        // - 4飜かつ40符以上は、符は考慮しない
        // - 3飜かつ70符以上は、符は考慮しない
        (fanCount > 4
          ? true
          : fanCount === 4 && symbolCount && symbolCount >= 40
          ? true
          : fanCount === 3 && symbolCount && symbolCount >= 70
          ? true
          : score.symbolCount === symbolCount)
    );
    if (!score) {
      throw new Error('Score not found');
    }
    return scoreEntitySchema.parse(score);
  };
}

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
