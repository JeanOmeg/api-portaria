import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
  username: 'postgres',
  password: 'suasenha',
  database: 'api-portaria',
  host: '127.0.0.1',
  dialect: 'postgres',
  port: 5432
})
