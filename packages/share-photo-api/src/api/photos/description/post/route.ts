import {createRoute} from '@hono/zod-openapi';
import {errorResponseSchema} from '../../../common/schema';
import {requestBodySchema} from './schema';

const description = `
## 概要（何ができるか）
- 画像の説明を更新します

## 挙動（どのように行うか）
- 画像の説明を更新します

## 前提（何が必要か）
- 画像の登録がされている必要があります

## その他・補足
- なし
`;

export const photosDescriptionPostRoute = createRoute({
  method: 'post',
  path: '/photos/description',
  tags: ['Photos'],
  summary: '画像の説明を更新します',
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
