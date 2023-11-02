import { DataTypes } from 'sequelize'
import { db } from '@services/db'
import { ICadastroUsuario } from '@interfaces/usuario/cadastro-usuario'
import bcrypt from 'bcrypt'
require('dotenv').config()

const tabela = 'cadastro_usuario'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CadastroUsuarioSchema = db.define<any, ICadastroUsuario>(
  tabela,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_edicao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

export class CadastroUsuarioQuery {
  schema () {
    return CadastroUsuarioSchema
  }

  async salvarUsuario (dados_criação: ICadastroUsuario): Promise<ICadastroUsuario> {
    const senha = await bcrypt.hash(dados_criação.senha, Number(process.env.SALT))
    return await CadastroUsuarioSchema.create({
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
    return await CadastroUsuarioSchema.findOne({
      where: {
        email: email,
        login: login
      },
      raw: true
    })
  }

  async listarTodos (): Promise<ICadastroUsuario[]> {
    return await CadastroUsuarioSchema.findAll({
      raw: true
    })
  }
}
