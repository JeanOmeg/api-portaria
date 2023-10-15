import express from 'express'
import routes from './routes/index.routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
require('dotenv').config()

const PORTA = Number(process.env.PORTA) || 3000
const URL = process.env.URL

app.listen(PORTA, () => {
  console.log(`Server rodando em ${URL}${PORTA}`)
})
