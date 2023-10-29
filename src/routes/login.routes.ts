import { Router } from 'express'

const login_rota = Router()

login_rota.post('/', async (req, res) => {
  await fazerLogin(req, res)
})

export default login_rota
