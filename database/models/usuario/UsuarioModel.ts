import { DataTypes } from 'sequelize'
import { db_connection } from '../../config/database'
import { IUsuario } from '../../interfaces/usuario/IUsuario'

const tabela = 'usuario'

export const UsuarioSchema = db_connection.define<any, IUsuario>(
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
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
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
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

export class UsuarioQuery {
  schema() {
    return UsuarioSchema
  }

  async criarUsuario(dados_criação: IUsuario): Promise<IUsuario[]> {
    return await UsuarioSchema.create({
      nome: dados_criação.nome,
      email: dados_criação.email,
      telefone: dados_criação.telefone,
      endereco: dados_criação.endereco,
      data_criacao: Date.now(),
      data_edicao: Date.now()
    })
  }

  async listarPorId(id: number): Promise<IUsuario[]> {
    return await UsuarioSchema.findAll({
      where: {
        id: id
      },
      raw: true
    })
  }

  async listarTodos(): Promise<IUsuario[]> {
    return await UsuarioSchema.findAll({
      raw: true
    })
  }

  async listarNomeUsuarioPorId(id: number): Promise<string> {
    return await UsuarioSchema.findOne({
      where: {
        id: id
      },
      attributes: ['nome'],
      raw: true
    })
  }
}
