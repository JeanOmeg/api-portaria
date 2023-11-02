import { Router } from 'express'
import { UsuarioController } from '@controllers/usuario/usuario-controller'

const usuario = Router()
const rota ='usuario'

usuario.get(`${rota}/`, async (req, res) => { await UsuarioController.listarTodosUsuarios(req, res) })

usuario.post(`${rota}/cadastro`, async (req, res) => { await UsuarioController.salvarUsuario(req, res) })

export default usuario
