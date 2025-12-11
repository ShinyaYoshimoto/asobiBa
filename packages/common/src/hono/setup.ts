import {swaggerUI} from '@hono/swagger-ui';
import type {OpenAPIHono} from '@hono/zod-openapi';
import {cors} from 'hono/cors';

/**
 * Hono共通ミドルウェアの設定
 */
export function setupCommonMiddleware(app: OpenAPIHono): void {
  app.use('*', cors());
}

/**
 * Swagger UIの設定
 */
export interface SwaggerConfig {
  title: string;
  version: string;
  description: string;
  tags?: Array<{
    name: string;
    description: string;
  }>;
}

export function setupSwagger(app: OpenAPIHono, config: SwaggerConfig): void {
  app.doc31('doc', {
    openapi: '3.1.0',
    info: {
      title: config.title,
      version: config.version,
      description: config.description,
    },
    tags: config.tags || [],
  });
  app.get('/about', swaggerUI({url: '/doc'}));
}
