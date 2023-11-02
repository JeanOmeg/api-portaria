import { ILoginUsuario } from '@interfaces/login/login-usuario'
import { LoginUsuarioSchema } from '@schemas/login/login-usuario-schema'

export async function fazerLoginService (usuario_query: LoginUsuarioSchema, dados_login: ILoginUsuario): Promise<ILoginUsuario> {
  return await usuario_query.logarUsuario(dados_login)
}
