// import * as Sequelize from "sequelize";
//
// export interface UserModel extends Sequelize.Instance<UserAttributes>, UserAttributes {
//     userId?: string;
//     username: string;
//     password: string;
//     createdAt?: Date;
//     updatedAt?: Date;
// }
// import {Model, DataTypes} from 'sequelize';
//
// class UserModel extends Model {
//     public userId!: number;
//     public username!: string;
//     public password!: string;
//     // 时间戳!
//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;
// }
//
// UserModel.init({
//     userId: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     username: {
//         type: new DataTypes.STRING(128),
//         allowNull: false,
//     },
//     password: {
//         type: new DataTypes.STRING(128),
//         allowNull: false
//     }
// }, {
//     tableName: 'users',
//     sequelize: sequelize, // 这一点很重要
// });