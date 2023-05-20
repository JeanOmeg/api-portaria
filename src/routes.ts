import { Router } from 'express'
import { listarTodosUsuario } from './db/controllers/UsuarioController'

const routes = Router()

routes.get('/', (req, res) => {
  listarTodosUsuario(req, res)
})

export default routes
