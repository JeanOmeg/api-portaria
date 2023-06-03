import { Router } from 'express'
import { listarTodosUsuario } from './controllers/UsuarioController'

const routes = Router()

routes.get('/', (req, res) => {
  listarTodosUsuario(req, res)
})

export default routes
