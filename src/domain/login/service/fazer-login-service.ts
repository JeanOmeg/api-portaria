import * as dotenv from 'dotenv'
import * as bcrypt from 'bcrypt'
import { ILogin } from '@interface/login/login-interface'
import { ColaboradorSchema } from '@schema/colaborador/colaborador-schema'
import { LoginSchema } from '@schema/login/login-schema'
import { criarPayloadService } from './criar-payload-service'

dotenv.config()

export async function fazerLoginService (login_schema: LoginSchema, colaborador_schema: ColaboradorSchema, dados_login: ILogin): Promise<ILogin> {

  const usuario = await colaborador_schema.listarColaboradorPorLogin(dados_login.login)
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
