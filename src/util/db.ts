import { Dialect, Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config()

export const db = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT as Dialect,
  port: Number(process.env.DB_PORT)
})
