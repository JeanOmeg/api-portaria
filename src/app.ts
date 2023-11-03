import express from 'express'
import routes from '@route/index.routes'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

export default app
