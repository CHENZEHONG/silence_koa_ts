import * as Koa from "koa2";
import * as Router from "koa-router";
import * as Json from "koa-json";
import * as BodyParser from 'koa-bodyparser';
import * as Static from 'koa-static';
import AppRoutes from './routes/Router';
import {tokenCheck} from './middleware/tokenCheck';


export class App {
    private app: Koa;
    private router: Router;

    constructor(private port?: number | string) {
        this.app = new Koa();
        this.router = new Router();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings(): void {
        this.port = this.port || process.env.port || 3000
    }

    private middlewares(): void {
        this.app.use(Json());
        this.app.use(BodyParser());
        this.app.use(Static(__dirname + '/static'));
        this.app.use(tokenCheck)
    }

    private routes(): void {
        this.app.use(AppRoutes.routes()).use(this.router.allowedMethods());
    }

    async listen() {
        await this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`)
        })
    }
}