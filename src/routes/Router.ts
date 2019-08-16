import * as Router from 'koa-router';

import UserRouter from './User'
// import UserController from '../app/controllers/User';

const apiRouter = new Router({prefix: '/api'});
apiRouter.use('/user', UserRouter);

export default apiRouter;
// export default [
//     {
//         path: '/',
//         method: 'get',
//         action: UserController.sayhello
//     }
// ]