import {Storage} from '@google-cloud/storage';
import csvParser from 'csv-parser';
import csvStringify from 'csv-stringify';

type playerPoint = {
  playerId: string;
  rawPoint: number;
  rankingPoint: number;
  totalPoint: number;
};

export class TriggerUploadGamesCsv {
  public static async handle(event: any) {
    console.log(event, 'start event handler');

    const storage = new Storage();

    const bucketName = event.data.bucket;
    const fileName = event.data.name;

    const bucket = storage.bucket(bucketName);
    const file = bucket.file(fileName);

    if (!this.validate(fileName)) {
      return;
    }

    const result: playerPoint[] = [];
    file
      .createReadStream()
      .pipe(csvParser())
      .on('data', data => result.push(...logic(data)))
      .on('end', () => {
        const players = groupBy(result, 'playerId');
        const list = players.map(player => ({
          // Glide側のデータに合わせて出力
          UserId: player.key,
          TotalPoint: parseFloat(player.values.reduce((sum, current) => sum + current.totalPoint, 0).toFixed(1)),
          GameCount: player.values.length,
        }));
        console.log('CSV content:', list);

        const csv = csvStringify.stringify(list, {header: true});
        let csvData = '';

        csv.on('data', chunk => {
          csvData += chunk.toString();
        });

        csv.on('end', () => {
          const bucketName = process.env.BUCKET_NAME || 'default-bucket-name';
          const bucket = storage.bucket(bucketName);
          const file = bucket.file('output.csv');
          file.save(csvData, err => {
            if (err) {
              console.error('Error saving CSV file:', err);
            } else {
              console.log('CSV file saved successfully.');
            }
          });
        });
      })
      .on('error', err => {
        console.error('Error reading CSV file:', err);
      });
    console.log(event, 'end event handler');
  }

  private static validate = (fileName: string): boolean => {
    try {
      if (!fileName.endsWith('.csv')) {
        throw new Error('Uploaded file is not a CSV.');
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}


const logic = (param: any): playerPoint[] => {
  const list = [
    {
      playerId: param.Player1Id,
      rawPoint: parseFloat(param.Player1RawPoint),
    },
    {
      playerId: param.Player2Id,
      rawPoint: parseFloat(param.Player2RawPoint),
    },
    {
      playerId: param.Player3Id,
      rawPoint: parseFloat(param.Player3RawPoint),
    },
    {
      playerId: param.Player4Id,
      rawPoint: parseFloat(param.Player4RawPoint),
    },
  ];

  const filterdList = list.sort((a, b) => b.rawPoint - a.rawPoint).filter(item => item.playerId.length > 0);

  if (filterdList.length < 3) return [];

  // 三人麻雀
  if (filterdList.length === 3) {
    // TODO: 実装
    //const groupByPlayerId = groupBy(filterdList, 'playerId');
    return [];
  }

  // 四人麻雀
  return [
    {
      ...list[0],
      rankingPoint: 50,
      totalPoint: list[0].rawPoint + 50,
    },
    {
      ...list[1],
      rankingPoint: 10,
      totalPoint: list[1].rawPoint + 10,
    },
    {
      ...list[2],
      rankingPoint: -10,
      totalPoint: list[2].rawPoint - 10,
    },
    {
      ...list[3],
      rankingPoint: -30,
      totalPoint: list[3].rawPoint - 30,
    },
  ];
};

const groupBy = <T extends {[key: string]: any}>(objects: T[], key: keyof T): Array<{key: string; values: T[]}> => {
  const map = objects.reduce((map, obj) => {
    map[obj[key]] = map[obj[key]] || [];
    map[obj[key]].push(obj);
    return map;
  }, {} as {[key: string]: T[]});

  return Object.keys(map).map(k => ({key: k, values: map[k]}));
};