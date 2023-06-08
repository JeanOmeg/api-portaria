import { Dialect } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'

require('dotenv').config()

export const sequelize = new Sequelize({
  username: process.env.USERNAME_POSTGRES,
  password: process.env.SENHA_POSTGRES,
  database: process.env.NOME_DATABASE,
  host: process.env.HOST,
  dialect: process.env.DIALECT as Dialect,
  port: Number(process.env.PORT_POSTGRES)
})
