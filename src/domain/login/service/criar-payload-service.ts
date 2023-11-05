import { IUsuario } from '@interface/usuario/usuario-interface'
import { ILogin } from '@interface/login/login-interface'
import { IUsuarioLogado } from '@interface/login/usuario-logado-interface'
import * as dotenv from 'dotenv'
import { sign } from 'jsonwebtoken'
dotenv.config()

export async function criarPayloadService (usuario: IUsuario) {

  const payload: IUsuarioLogado = {
    id_usuario: usuario.id,
    id_tipo_usuario: usuario.id_tipo_usuario,
    id_condominio: usuario.id_condominio,
    nome: usuario.nome,
    login: usuario.login
  }

  const token = sign(payload, process.env.TOKEN as string, {
    expiresIn: Number(process.env.TIME_TOKEN)
  })

  const refreshToken = sign(payload, process.env.TOKEN as string, {
    expiresIn: Number(process.env.TIME_REFRESH_TOKEN)
  })


  const login: ILogin = {
    id_condominio: usuario.id_condominio,
    id_usuario: usuario.id,
    id_tipo_usuario: usuario.id_tipo_usuario,
    login: usuario.login,
    token: token,
    refresh_token: refreshToken,
    data_criacao: new Date()
  }

  return login
}
