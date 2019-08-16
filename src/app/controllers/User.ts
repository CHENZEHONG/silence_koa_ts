import UserService from '../services/User';

export default class UserController {
    static async sayhello(ctx) {
        ctx.body = await UserService.sayHi('zemun');
    }

    static async login(ctx) {
        let username: string = ctx.request.body.username;
        let password: string = ctx.request.body.password;

        let result = await UserService.login(username, password)
        if (result === 0) {
            ctx.body = {
                message: 'failed login'
            }
        } else {
            ctx.body = {
                message: 'success login',
                data: {
                    code: 1
                }
            }
        }
    }
}

