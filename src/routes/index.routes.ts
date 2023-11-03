import { Router } from 'express'
import colaborador from '@routes/colaborador/colaborador.routes'
import login from '@routes/login/login.routes'

const routes = Router()

routes.get('/', (_req, res) => {
  res.send('teste')
})

routes.use('/', colaborador)
routes.use('/', login)

export default routes
