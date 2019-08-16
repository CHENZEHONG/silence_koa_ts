import * as Koa from "koa2";
import * as Router from "koa-router";
import * as Json from "koa-json";
import * as Bodyparser from 'koa-bodyparser';
import AppRoutes from './routes/Router';

const app = new Koa();
const router = new Router();

const port = process.env.port || 3000;
const hostname = process.env.host || '127.0.0.1';

// AppRoutes.forEach(route => router[route.method](route.path, route.action));
app.use(Json());
app.use(Bodyparser());
app.use(AppRoutes.routes()).use(router.allowedMethods());
// app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`koa start ${hostname}:${port}`);
});