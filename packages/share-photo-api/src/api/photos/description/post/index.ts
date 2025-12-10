import {PhotosDescriptionPostHandler} from './handler';
import {photosDescriptionPostRoute} from './route';
import {OpenAPIHono} from '@hono/zod-openapi';

export const photosDescriptionPost = (app: OpenAPIHono) =>
  app.openapi(photosDescriptionPostRoute, new PhotosDescriptionPostHandler().execute);
