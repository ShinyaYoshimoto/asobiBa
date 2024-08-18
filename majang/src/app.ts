import express from 'express';
const app: express.Express = express();
import {z} from 'zod';

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// health check用のエンドポイント / 200ステータスを返す
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({status: 'ok'});
});

/**
 * 符数と翻数を受け取り、点数を計算するAPI
 * @param req.body.symbolCount 符数
 * @param req.body.fanCount 翻数
 */
app.post('/calculate-score', (req: express.Request, res: express.Response) => {
  try {
    // validate
    const numberSchema = z.number({
      required_error: 'param-required',
      invalid_type_error: 'expected-number',
    });

    const symbolCount = numberSchema.parse(req.body.symbolCount);
    const fanCount = numberSchema.parse(req.body.fanCount);

    // FIXME 一旦、固定値を返す
    res.status(200).json({score: 1000});
  } catch (error) {
    console.log(error)
    res.status(400).json({error: error ?? 'Invalid input'});
  }
});

export default app;
