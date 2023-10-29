import { Router } from 'express'
import usuario_rota from '@routes/usuario.routes'

const routes = Router()

routes.get('/', (_req, res) => {
  res.send('teste')
})

routes.use('/usuario', usuario_rota)

export default routes
