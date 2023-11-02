import { ILogin } from '@interfaces/login/login-interface'
import { LoginModel } from '@models/login/login-model'


export class LoginSchema {
  schema () {
    return LoginModel
  }

  async logarUsuario (dados_criação: ILogin): Promise<ILogin> {
    return await LoginModel.create({
      id_usuario: dados_criação.id_usuario,
      id_condominio: dados_criação.id_condominio,
      login: dados_criação.login,
      token: dados_criação.token,
      refresh_token: dados_criação.refresh_token,
      data_criacao: Date.now()
    })
  }
}
