import { Dialect } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'

require('dotenv').config()

export const db_connection = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT as Dialect,
  port: Number(process.env.DB_PORT)
})
