import { Router } from 'express'
import { criarUsuario, listarTodosUsuarios } from '@controllers/usuario/usuario-controller'

const usuario_rota = Router()

usuario_rota.get('/', async (req, res) => {
  await listarTodosUsuarios(req, res)
})

usuario_rota.post('/cadastro', async (req, res) => {
  await criarUsuario(req, res)
})

export default usuario_rota
