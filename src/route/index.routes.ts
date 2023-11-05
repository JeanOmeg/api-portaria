import { Router } from 'express'
import colaborador from '@route/colaborador/colaborador.route'
import login from '@route/login/login.route'

const routes = Router()

routes.get('/', (_req, res) => {
  res.send('teste')
})

routes.use('/', colaborador)
routes.use('/login', login)

export default routes
