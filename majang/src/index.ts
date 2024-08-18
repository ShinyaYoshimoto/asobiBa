import express from 'express';
const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// health check用のエンドポイント / 200ステータスを返す
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(JSON.stringify({status: 'ok'}));
});

/**
 * 符数と翻数を受け取り、点数を計算する
 * @param req.body.symbolCount 符数
 * @param req.body.fanCount 翻数
 */
app.post('/calculate-score', (req: express.Request, res: express.Response) => {
  const {symbolCount, fanCount} = req.body;
  res.status(200).send(JSON.stringify({status: 'ok', response: {score: 1000}}));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Start on port 3000.');
});
