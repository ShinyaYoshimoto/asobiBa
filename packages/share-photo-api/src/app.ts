import {swaggerUI} from '@hono/swagger-ui';
import {OpenAPIHono} from '@hono/zod-openapi';
import {cors} from 'hono/cors';

import {photosDescriptionPost} from './api/photos/description/post';
import {PhotosPostHandler} from './api/photos/post/handler';
import {photosPostRoute} from './api/photos/post/route';
import {PhotosSearchPostHandler} from './api/photos/search/post/handler';
import {photosSearchPostRoute} from './api/photos/search/post/route';
import {PhotosTagsDeleteHandler} from './api/photos/tags/delete/handler';
import {photosTagsDeleteRoute} from './api/photos/tags/delete/route';
import {PhotosTagsPostHandler} from './api/photos/tags/post/handler';
import {photosTagsPostRoute} from './api/photos/tags/post/route';
import {PhotosUploadSignedUrlPostHandler} from './api/photos/upload-signed-url/post/handler';
import {photosUploadSignedUrlPostRoute} from './api/photos/upload-signed-url/post/route';
import {ListTagsGetHandler} from './api/tags/get/handler';
import {listTagsGetRoute} from './api/tags/get/route';

const app = new OpenAPIHono({});

app.use('*', cors());

// 各種エンドポイントを追加する
app.openapi(photosSearchPostRoute, new PhotosSearchPostHandler().execute);
app.openapi(listTagsGetRoute, new ListTagsGetHandler().execute);
app.openapi(photosTagsPostRoute, new PhotosTagsPostHandler().execute);
app.openapi(photosTagsDeleteRoute, new PhotosTagsDeleteHandler().execute);
app.openapi(photosUploadSignedUrlPostRoute, new PhotosUploadSignedUrlPostHandler().execute);
app.openapi(photosPostRoute, new PhotosPostHandler().execute);

photosDescriptionPost(app);

/////////////////////////////////
// swagger UI
/////////////////////////////////
const description = `## 概要
- 写真共有に関するAPIを公開しています。
- 本APIの結果の正しさについては責任を負いません。
- 過剰なリクエストが発生した場合、利用が制限される可能性があります。
- APIの内容は予告なく変更・停止されることがあります。
`;

app.doc31('doc', {
  openapi: '3.1.0',
  info: {
    title: 'Photo Sharing API',
    version: '0.0.1',
    description,
  },
  tags: [
    {
      name: 'Photos',
      description: '写真管理',
    },
    {
      name: 'Tags',
      description: 'タグ管理',
    },
  ],
});
app.get('/about', swaggerUI({url: '/doc'}));

export default app;
