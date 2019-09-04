import {query} from '../utils/mysql'
import {Context} from "koa";
import * as jwt from 'jsonwebtoken'
import {tokenSecret} from '../utils/secret'

export default class userController {
    static async login(ctx: Context) {
        const {username, password} = ctx.request.body;
        let result = await query("select * from users where username=? and password=?", [username, password]);
        if (!result[0]) {
            ctx.response.body = {
                message: "failed login"
            }
        } else {
            let payload = {
                username: username,
                time: new Date().getTime(),
                timeout: 1000 * 60 * 60 * 2
            };
            let token: string = jwt.sign(payload, tokenSecret);

            ctx.response.body = {
                message: "success login",
                data: result,
                token: token
            }
        }
    }
}