import { ICondomino } from '@interface/condomino/condomino-interface'
import { CondominioModel } from '@model/condominio/condominio-model'

export class CondominoSchema {
  schema () {
    return CondominioModel
  }

  async listarSenhaPorLoginESenha (login: string, senha: string): Promise<ICondomino> {
    return await CondominioModel.findOne({
      where: { login: login, senha: senha },
      raw: true
    })
  }
}
