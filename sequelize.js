require('dotenv').config()

module.exports = {
  username: process.env.USERNAME_POSTGRES,
  password: process.env.SENHA_POSTGRES,
  database: process.env.NOME_DATABASE,
  host: process.env.HOST,
  dialect: 'postgres',
  port: Number(process.env.PORT_POSTGRES)
}
