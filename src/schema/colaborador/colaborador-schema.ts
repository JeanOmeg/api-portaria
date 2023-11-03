import { IColaborador } from '@interface/colaborador/colaborador-interface'
import { ColaboradorModel } from '@model/colaborador/colaborador-model'
import bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'
dotenv.config()

export class ColaboradorSchema {
  schema () {
    return ColaboradorModel
  }

  async salvarColaborador (dados_criação: IColaborador): Promise<IColaborador> {
    const senha = await bcrypt.hash(dados_criação.senha, Number(process.env.SALT))
    return await ColaboradorModel.create({
      nome: dados_criação.nome,
      email: dados_criação.email,
      login: dados_criação.login,
      senha: senha,
      telefone: dados_criação.telefone,
      endereco: dados_criação.endereco,
      data_criacao: Date.now()
    })
  }

  async listarPorEmailELogin (email: string, login: string): Promise<IColaborador> {
    return await ColaboradorModel.findOne({
      where: {
        email: email,
        login: login
      },
      raw: true
    })
  }

  async listarTodos (): Promise<IColaborador[]> {
    return await ColaboradorModel.findAll({
      raw: true
    })
  }
}
