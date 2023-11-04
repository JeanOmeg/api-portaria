import { ILogin } from '@interface/login/login-interface'
import { LoginSchema } from '@schema/login/login-schema'

export async function fazerLoginService (usuario_query: LoginSchema, dados_login: ILogin): Promise<ILogin> {
  return await usuario_query.logarUsuario(dados_login)
}