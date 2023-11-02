import { Router } from 'express'
import { salvarUsuario, listarTodosUsuarios } from '@controllers/usuario/cadastro-usuario-controller'

const usuario_rota = Router()

usuario_rota.get('/', async (req, res) => {
  await listarTodosUsuarios(req, res)
})

usuario_rota.post('/cadastro', async (req, res) => {
  await salvarUsuario(req, res)
})

export default usuario_rota
