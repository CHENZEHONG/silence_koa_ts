import {query} from '../utils/mysql'

export default class ListController {
    static async getList(ctx) {
        let result = await query("select * from users")
        ctx.response.body = {
            message: "hello",
            data: result
        }
    }
}