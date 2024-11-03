import {swaggerUI} from '@hono/swagger-ui';
import {OpenAPIHono} from '@hono/zod-openapi';

// FIXME: APIを増やすたびに、RouterとHandlerを追加する必要があり、ちょっと冗長な気もする
import {scoresCalculateRoute} from './api/scores/calculate/post/route';
import {ScoresCalculateHandler} from './api/scores/calculate/post/handler';
import {scoresAnswerRoute} from './api/scores/answer/post/route';
import {ScoresAnswerHandler} from './api/scores/answer/post/handler';
import {ScoresAnswersHandler} from './api/scores/answers/get/handler';
import {scoresAnswersRoute} from './api/scores/answers/get/route';
import {ScoresAnswersSummariesHandler} from './api/scores/answers/summaries/get/handler';
import {scoresAnswersSummariesRoute} from './api/scores/answers/summaries/get/route';
import {handsRoute} from './api/hands/get/route';
import {HandsHander} from './api/hands/get/handler';

const app = new OpenAPIHono({});

// 各種エンドポイントを追加する
app.openapi(scoresCalculateRoute, new ScoresCalculateHandler().execute);
app.openapi(scoresAnswerRoute, new ScoresAnswerHandler().execute);
app.openapi(scoresAnswersRoute, new ScoresAnswersHandler().execute);
app.openapi(scoresAnswersSummariesRoute, new ScoresAnswersSummariesHandler().execute);
app.openapi(handsRoute, new HandsHander().execute);

// TODO
// - [ ] 認証できるようにし、ユーザーごとに回答を保持、取得できるようにする

/////////////////////////////////
// swagger UI
/////////////////////////////////
const description = `## 概要
- 麻雀に関するAPIを公開しています。
- 本APIの結果の正しさについては責任を負いません。
- 過剰なリクエストが発生した場合、利用が制限される可能性があります。
- APIの内容は予告なく変更・停止されることがあります。
- APIの仕様については、できる限りMリーグの公式ルールに沿った内容を目指しています。
`;

app.doc31('doc', {
  openapi: '3.1.0',
  info: {
    title: 'Mahjong API',
    version: '0.0.1',
    description,
  },
  tags: [
    {
      name: 'hands',
      description: 'あがり役',
    },
  ],
});
app.get('/about', swaggerUI({url: '/doc'}));

export default app;
