import { Router } from 'express'
import usuario_rota from '@routes/usuario.routes'
import login_rota from '@routes/login.routes'

const routes = Router()

routes.get('/', (_req, res) => {
  res.send('teste')
})

routes.use('/usuario', usuario_rota)
routes.use('/login', login_rota)

export default routes
