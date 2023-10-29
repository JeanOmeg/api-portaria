import express from 'express'
import routes from '@routes/index.routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
require('dotenv').config()

const porta = Number(process.env.PORTA) || 3000
const url = process.env.URL

app.listen(porta, () => {
  console.log(`Server rodando em ${url}${porta}`)
})
