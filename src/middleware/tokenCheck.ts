import * as jwt from 'jsonwebtoken'
import {Context} from 'koa'
import {tokenSecret} from '../utils/secret';
import {JsonWebTokenError} from "jsonwebtoken";

export async function tokenCheck(ctx: Context, next) {
    const token = ctx.request.headers["authorization"];
    if (!token) {
        console.log("can't not find token");
    } else {
        const result = await verify(token, tokenSecret);
        if (result) {
            const {time, timeout} = result;
            let nowDate = new Date().getTime();
            if (nowDate - time <= timeout) {
                console.log('token 未过期');
                await next();
            } else {
                console.log('token 过期');
                ctx.response.body = {
                    status: 50014,
                    message: 'token已过期,请重新登录'
                }
            }
        }
        // else if ( result == JsonWebTokenError) {
        //     console.log("token 错误")
        // }
    }
}

export let verify = function (token: string, tokenSecret: string | Buffer): Promise<any> {
    return new Promise((resolve, reject) => {
        jwt.verify(token, tokenSecret, (err: JsonWebTokenError, decoded) => {
            if (err) {
                reject(err)
            } else {
                resolve(decoded)
            }
        })
    })
};
