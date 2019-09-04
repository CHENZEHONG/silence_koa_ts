import * as mysql from 'mysql'
import {MysqlError, Pool} from "mysql";
import {PoolConnection} from "mysql";

const pool: Pool = mysql.createPool({
    database: "silence",
    user: "root",
    password: "12345678",
    host: "localhost",
    port: 3306,
});
export let query = function (sql: string, values?): Promise<any> {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err: MysqlError, connection: PoolConnection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err: Error, rows: any[]) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
};

