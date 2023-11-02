import { Router } from 'express'
import usuario from '@routes/usuario/usuario.routes'
import login from '@routes/login/login.routes'

const routes = Router()

routes.get('/', (_req, res) => {
  res.send('teste')
})

routes.use('/', usuario)
routes.use('/', login)

export default routes
