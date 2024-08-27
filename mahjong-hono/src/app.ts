import {swaggerUI} from '@hono/swagger-ui';
import {OpenAPIHono} from '@hono/zod-openapi';
import {scoresCalculateRoute} from './api/scores/calculate/route';
import {ScoresCalculateHandler} from './api/scores/calculate/handler';

const app = new OpenAPIHono({});

// 各種エンドポイントを追加する
app.openapi(scoresCalculateRoute, new ScoresCalculateHandler().handle);

// TODO: 特定の条件（ex. 親 - ツモ - 70符1飜）は何点？という問題への回答を記録するAPIを作成する
// - [ ] エンドポイントとスキーマを決める
// - [ ] Prismaでテーブルを作成する
// - [ ] テーブルに回答を記録する
// - [ ] テーブルに記録された回答を取得する
// - [ ] 認証できるようにする

// health check
app.get('/', c => {
  return c.text('Hello Hono!');
});

// swagger UI
app.doc31('doc', {
  openapi: '3.1.0',
  info: {
    title: 'Mahjong API',
    version: '0.0.1',
  },
});
app.get('/ui', swaggerUI({url: '/doc'}));

export default app;
