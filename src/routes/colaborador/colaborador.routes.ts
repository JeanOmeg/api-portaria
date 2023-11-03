import { Router } from 'express'
import { ColaboradorController } from '@controllers/colaborador/usuario-controller'

const colaborador = Router()
const rota ='colaborador'

colaborador.get(`${rota}`, async (req, res) => { await ColaboradorController.listarTodosColaboradores(req, res) })

colaborador.post(`${rota}/cadastro`, async (req, res) => { await ColaboradorController.cadastrarColaborador(req, res) })

export default colaborador
