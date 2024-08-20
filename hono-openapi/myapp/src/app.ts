import {OpenAPIHono} from '@hono/zod-openapi';
import {prefectureRoute, prefecturesRoute} from './route';
import {swaggerUI} from '@hono/swagger-ui';

type Bindings = {
  DB: any;
};

const app = new OpenAPIHono<{Bindings: Bindings}>();

app.openapi(
  prefectureRoute,
  async (c) => {
    return c.json({code: 404, message: 'Not Found'}, 404);
  }
)

app.openapi(
  prefecturesRoute,
  async (c) => {
    return c.json(
      [{
        name: "aaa",
        kana: "bbb",
        prefectureId: "ccc",
      }]
    );
  }
)

app.doc31('/doc', {
  openapi: '3.1.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
});

app.get('/ui', swaggerUI({url: '/doc'}));

export default app;
