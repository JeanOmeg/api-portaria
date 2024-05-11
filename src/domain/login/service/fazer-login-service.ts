import * as bcrypt from 'bcrypt'
import { ILogin } from '@interface/login/login-interface'
import { UsuarioSchema } from '@schema/usuario/usuario-schema'
import { LoginSchema } from '@schema/login/login-schema'
import { criarPayloadService } from './criar-payload-service'

export async function fazerLoginService (login_schema: LoginSchema, usuario_schema: UsuarioSchema, dados_login: ILogin): Promise<ILogin> {

  const usuario = await usuario_schema.listarColaboradorPorLogin(dados_login.login)
  if (!usuario) {
    throw new Error('Erro')
  }

  const comparacao = await bcrypt.compare(dados_login.senha as string, usuario.senha)
  if (!comparacao) {
    throw new Error('Erro')
  }

  const login = await criarPayloadService(usuario)

  return await login_schema.logarUsuario(login)
}
