import {swaggerUI} from '@hono/swagger-ui';
import {OpenAPIHono} from '@hono/zod-openapi';
import {cors} from 'hono/cors';

import {handsGet} from './api/hands/get';
import {ScoresDeclarationsCalculatePostHandlerHandler} from './api/score-declarations/calculate/post/handler';
import {scoresDeclarationsCalculatePostRoute} from './api/score-declarations/calculate/post/route';
import {ScoresDeclarationsGetHandler} from './api/score-declarations/get/handler';
import {scoresDeclarationsGetRoute} from './api/score-declarations/get/route';
import {ScoresDeclarationsPostHandler} from './api/score-declarations/post/handler';
import {scoresDeclarationsPostRoute} from './api/score-declarations/post/route';
import {ScoresDeclarationsSummariesGetHandler} from './api/score-declarations/summaries/get/handler';
import {scoresDeclarationsSummariesGetHandlerRoute} from './api/score-declarations/summaries/get/route';
import {ScoresAnswerPostHandler} from './api/scores/answer/post/handler';
import {scoresAnswerPostRoute} from './api/scores/answer/post/route';

const app = new OpenAPIHono({});

app.use('*', cors());

// 各種エンドポイントを追加する
app.openapi(scoresDeclarationsCalculatePostRoute, new ScoresDeclarationsCalculatePostHandlerHandler().execute);
app.openapi(scoresAnswerPostRoute, new ScoresAnswerPostHandler().execute);
app.openapi(scoresDeclarationsGetRoute, new ScoresDeclarationsGetHandler().execute);
app.openapi(scoresDeclarationsSummariesGetHandlerRoute, new ScoresDeclarationsSummariesGetHandler().execute);
handsGet(app);
app.openapi(scoresDeclarationsPostRoute, new ScoresDeclarationsPostHandler().execute);

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
      name: 'Hands',
      description: 'あがり役',
    },
    {
      name: 'ScoresDeclarations',
      description: '点数申告',
    },
    {
      name: 'Scores',
      description: '点数計算',
    },
  ],
});
app.get('/about', swaggerUI({url: '/doc'}));

export default app;
