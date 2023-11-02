import { ICadastroUsuario } from '@interfaces/usuario/cadastro-usuario'
import { CadastroUsuarioModel } from '@models/usuario/cadastro-usuario-model'
import bcrypt from 'bcrypt'
require('dotenv').config()

export class CadastroUsuarioSchema {
  schema () {
    return CadastroUsuarioModel
  }

  async salvarUsuario (dados_criação: ICadastroUsuario): Promise<ICadastroUsuario> {
    const senha = await bcrypt.hash(dados_criação.senha, Number(process.env.SALT))
    return await CadastroUsuarioModel.create({
      nome: dados_criação.nome,
      email: dados_criação.email,
      login: dados_criação.login,
      senha: senha,
      telefone: dados_criação.telefone,
      endereco: dados_criação.endereco,
      data_criacao: Date.now()
    })
  }

  async listarPorEmailELogin (email: string, login: string): Promise<ICadastroUsuario> {
    return await CadastroUsuarioModel.findOne({
      where: {
        email: email,
        login: login
      },
      raw: true
    })
  }

  async listarTodos (): Promise<ICadastroUsuario[]> {
    return await CadastroUsuarioModel.findAll({
      raw: true
    })
  }
}
