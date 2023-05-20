import express from 'express'
import routes from './routes'

const app = express()
app.use(routes)
require('dotenv').config()

const PORTA = Number(process.env.PORTA) || 3000

app.listen(PORTA, () => {
  console.log(`Server rodando em http://localhost:${PORTA}`)
})
