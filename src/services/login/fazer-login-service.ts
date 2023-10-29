import { ILoginUsuario } from '@interfaces/login/login-usuario'
import { LoginUsuarioQuery } from '@models/login/login-usuario-model'

export async function fazerLoginService (usuario_query: LoginUsuarioQuery, dados_login: ILoginUsuario): Promise<ILoginUsuario> {
  return await usuario_query.logarUsuario(dados_login)
}
