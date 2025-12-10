import {createRoute} from '@hono/zod-openapi';
import {requestBodySchema} from './schema';
import {errorResponseSchema} from '../../common/schema';

const description = `
## 概要（何ができるか）
- 画像をアップロードします

## 挙動（どのように行うか）
- 画像をアップロードします

## 前提（何が必要か）
- 

## その他・補足
- なし
`;

export const photosPostRoute = createRoute({
  method: 'post',
  path: '/photos',
  tags: ['Photos'],
  summary: '画像をアップロードします',
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
