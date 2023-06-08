"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
require('dotenv').config();
exports.sequelize = new sequelize_typescript_1.Sequelize({
    username: process.env.USERNAME_POSTGRES,
    password: process.env.SENHA_POSTGRES,
    database: process.env.NOME_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: Number(process.env.PORT_POSTGRES)
});
