const isProdEnv: boolean = process.env.NODE_ENV === 'production';

let sequelize = {
    database: 'silence', // 使用哪个数据库
    username: 'root', // 用户名
    password: '12345678', // 口令
    host: 'localhost', // 主机名
    port: 3306,// 端口号，MySQL默认3306
};

let mongoose = {
    client: {
        url: 'mongodb://127.0.0.1:27017/silence',
        options: {
            useNewUrlParser: true
        }
    }
};
let redis = {
    port: 6379,
    host: '127.0.0.1',
    prefix: 'silence:', //存诸前缀
    ttl: 60 * 60 * 23,  //过期时间
    db: 0
};
// 生产环境配置
if (isProdEnv) {

}

export default {
    sequelize,
    mongoose,
    redis
}