import {swaggerUI} from '@hono/swagger-ui';
import {OpenAPIHono} from '@hono/zod-openapi';

// FIXME: APIを増やすたびに、RouterとHandlerを追加する必要があり、ちょっと冗長な気もする
import {scoresDeclarationsCalculatePostRoute} from './api/score-declarations/calculate/post/route';
import {ScoresDeclarationsCalculatePostHandlerHandler} from './api/score-declarations/calculate/post/handler';
import {scoresAnswerPostRoute} from './api/scores/answer/post/route';
import {ScoresAnswerPostHandler} from './api/scores/answer/post/handler';
import {ScoresDeclarationsGetHandler} from './api/score-declarations/get/handler';
import {scoresDeclarationsGetRoute} from './api/score-declarations/get/route';
import {ScoresDeclarationsSummariesGetHandler} from './api/score-declarations/summaries/get/handler';
import {scoresDeclarationsSummariesGetHandlerRoute} from './api/score-declarations/summaries/get/route';
// import {handsGetRoute} from './api/hands/get/route';
// import {HandsGetHander} from './api/hands/get/handler';
import {scoresDeclarationsPostRoute} from './api/score-declarations/post/route';
import {ScoresDeclarationsPostHandler} from './api/score-declarations/post/handler';
import {handsGet} from './api/hands/get';
import {photosDescriptionPost} from './api/photos/description/post';
import {photosSearchPostRoute} from './api/photos/search/post/route';
import {PhotosSearchPostHandler} from './api/photos/search/post/handler';
import {listTagsGetRoute} from './api/tags/get/route';
import {ListTagsGetHandler} from './api/tags/get/handler';
import {cors} from 'hono/cors';
import {photosTagsPostRoute} from './api/photos/tags/post/route';
import {PhotosTagsPostHandler} from './api/photos/tags/post/handler';
import {photosTagsDeleteRoute} from './api/photos/tags/delete/route';
import {PhotosTagsDeleteHandler} from './api/photos/tags/delete/handler';
import {photosUploadSignedUrlPostRoute} from './api/photos/upload-signed-url/post/route';
import {PhotosUploadSignedUrlPostHandler} from './api/photos/upload-signed-url/post/handler';
import {photosPostRoute} from './api/photos/post/route';
import {PhotosPostHandler} from './api/photos/post/handler';

const app = new OpenAPIHono({});

app.use('*', cors());

// 各種エンドポイントを追加する
app.openapi(scoresDeclarationsCalculatePostRoute, new ScoresDeclarationsCalculatePostHandlerHandler().execute);
app.openapi(scoresAnswerPostRoute, new ScoresAnswerPostHandler().execute);
app.openapi(scoresDeclarationsGetRoute, new ScoresDeclarationsGetHandler().execute);
app.openapi(scoresDeclarationsSummariesGetHandlerRoute, new ScoresDeclarationsSummariesGetHandler().execute);
// app.openapi(handsGetRoute, new HandsGetHander().execute);
handsGet(app);
app.openapi(scoresDeclarationsPostRoute, new ScoresDeclarationsPostHandler().execute);

app.openapi(photosSearchPostRoute, new PhotosSearchPostHandler().execute);
app.openapi(listTagsGetRoute, new ListTagsGetHandler().execute);
app.openapi(photosTagsPostRoute, new PhotosTagsPostHandler().execute);
app.openapi(photosTagsDeleteRoute, new PhotosTagsDeleteHandler().execute);
app.openapi(photosUploadSignedUrlPostRoute, new PhotosUploadSignedUrlPostHandler().execute);
app.openapi(photosPostRoute, new PhotosPostHandler().execute);

photosDescriptionPost(app);
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
