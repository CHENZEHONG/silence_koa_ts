import * as Router from 'koa-router';
import userController from '../controllers/user.controllers';
import ListController from '../controllers/list.controller'

const router = new Router();
router.post('/login', userController.login);
router.get('/list', ListController.getList);

export default router.routes();