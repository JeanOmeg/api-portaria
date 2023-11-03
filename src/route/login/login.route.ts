import { Router } from 'express'

const login = Router()
const rota = 'login'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
login.post(`${rota}/`, async (_req, _res) => {})

export default login
