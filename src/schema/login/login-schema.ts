import { ILogin } from '@interface/login/login-interface'
import { LoginModel } from '@model/login/login-model'

export class LoginSchema {
  schema () {
    return LoginModel
  }

  async logarUsuario (login: ILogin): Promise<ILogin> {
    return await LoginModel.create({
      id_condominio: login.id_condominio,
      id_tipo_usuario: login.id_tipo_usuario,
      login: login.login,
      token: login.token,
      refresh_token: login.refresh_token,
      data_criacao: login.data_criacao
     })
  }
}
