import * as Router from 'koa-router';
import UserController from '../app/controllers/User';

const router = new Router();

router.get('/', UserController.sayhello);
router.post('/login', UserController.login);

export default router.routes();