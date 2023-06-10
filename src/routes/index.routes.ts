import { Router } from 'express'
import usuario_rota from './usuario.routes'

const routes = Router()

routes.get('/', (_req, res) => {
  res.send('teste')
})

routes.use('/users', usuario_rota)

export default routes
