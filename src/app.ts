import express from 'express'
import routes from '@route/index.routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
require('dotenv').config()

export default app
