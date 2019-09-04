const isProdEnv: boolean = process.env.NODE_ENV === "production";


export interface mysqlConfig {
    database: string                // 使用哪个数据库
    username: string                // 用户名
    password: string | number       // 口令
    host: string                    // 主机名
    port: string | number           // 端口号，MySQL默认3306
    connectionLimit?: number        // 连接限制
}

// let mysqlConfig = {
//     database: "silence",
//     username: "root",
//     password: "12345678",
//     host: "localhost",
//     port: 3306,
// };

let mongooseConfig = {
    client: {
        url: "mongodb://127.0.0.1:27017/silence",
        options: {
            useNewUrlParser: true
        }
    }
};
let redis = {
    port: 6379,
    host: "127.0.0.1",
    prefix: "silence:", //存诸前缀
    ttl: 60 * 60 * 23,  //过期时间
    db: 0
};
// 生产环境配置
if (isProdEnv) {

}

export {
    mongooseConfig,
    redis
}