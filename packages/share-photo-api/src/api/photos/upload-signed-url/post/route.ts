import {createRoute} from '@hono/zod-openapi';
import {errorResponseSchema} from '../../../common/schema';
import {requestBodySchema, responseBodySchema} from './schema';

const description = `
## 概要（何ができるか）
- 画像アップロード用の署名付きURLを取得します

## 挙動（どのように行うか）
- 署名付きURLを取得します
- アップロード時にタグを3つまで指定することができます
- タグを指定すると、アップロード時にタグを付与することができます

## 前提（何が必要か）
- なし

## その他・補足
- 署名付きURLは20分間有効です
- 存在しないタグを指定した場合、アップロード時にタグを付与しません
`;

export const photosUploadSignedUrlPostRoute = createRoute({
  method: 'post',
  path: '/photos/upload-signed-url',
  tags: ['Photos'],
  summary: '画像アップロード用の署名付きURLを取得します',
  description,
  request: {
    body: {
      content: {
        'application/json': {
          schema: requestBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: responseBodySchema,
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
    },
    // TODO: 認証機能を入れた際に初めて利用するのでコメントアウト
    // 401: {
    //   description: 'Unauthorized',
    //   content: {
    //     'application/json': {
    //       schema: errorResponseSchema,
    //     },
    //   },
    // },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
    },
  },
});
