import { ILoginUsuario } from '@interfaces/login/login-usuario'
import { LoginUsuarioModel } from '@models/login/login-usuario-model'


export class LoginUsuarioSchema {
  schema () {
    return LoginUsuarioModel
  }

  async logarUsuario (dados_criação: ILoginUsuario): Promise<ILoginUsuario> {
    return await LoginUsuarioModel.create({
      email: dados_criação.email,
      login: dados_criação.login,
      token: dados_criação.token,
      refresh_token: dados_criação.refresh_token,
      data_criacao: Date.now()
    })
  }
}
