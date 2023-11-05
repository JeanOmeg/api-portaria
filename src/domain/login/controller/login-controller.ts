import { ILogin } from '@interface/login/login-interface'
import * as dotenv from 'dotenv'
import { LoginSchema } from '@schema/login/login-schema'
import { UsuarioSchema } from '@schema/usuario/usuario-schema'
import { fazerLoginService } from '@domain/login/service/fazer-login-service'
dotenv.config()

export module LoginController {
  const login_schema = new LoginSchema()
  const colaborador_schema = new UsuarioSchema()


  export async function fazerLogin (req: any, res: any): Promise<ILogin> {
    try {
      const dados_login: ILogin = req.body
      const usuario = await fazerLoginService(login_schema, colaborador_schema, dados_login)

      return res.status(200).json(usuario)
    } catch (error: any) {
      return res.status(400).json(error.message)
    }
  }
}
