import * as Router from 'koa-router';
import userRouter from './user.routes'

const apiRouter = new Router({prefix: '/api'});
apiRouter.use('/user', userRouter);

export default apiRouter;
// export default [
//     {
//         path: '/',
//         method: 'get',
//         action: UserController.sayhello
//     }
// ]