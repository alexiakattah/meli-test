import { Router } from 'express';

import ItemsController from './controllers/ItemsController';
import SearchController from './controllers/SearchController';

const routes = new Router();

routes.get('/items/:id', ItemsController.index);
routes.get('/items/', SearchController.index);

export default routes;
