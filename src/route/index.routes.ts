import { Router } from 'express'
import usuario from '@route/usuario/usuario.route'
import login from '@route/login/login.route'

const routes = Router()

routes.get('/', (_req, res) => { res.send('teste') })

routes.use(login)
routes.use(usuario)

export default routes
