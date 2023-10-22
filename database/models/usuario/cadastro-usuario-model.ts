import { DataTypes } from 'sequelize'
import { db_connection } from '../../config/database'
import { ICadastroUsuario } from '../../interfaces/usuario/ICadastroUsuario'

const tabela = 'cadastro_usuario'

export const CadastroUsuarioSchema = db_connection.define<any, ICadastroUsuario>(
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
  schema() {
    return CadastroUsuarioSchema
  }

  async criarUsuario(dados_criação: ICadastroUsuario): Promise<ICadastroUsuario> {
    return await CadastroUsuarioSchema.create({
      nome: dados_criação.nome,
      email: dados_criação.email,
      login: dados_criação.login,
      senha: dados_criação.senha,
      telefone: dados_criação.telefone,
      endereco: dados_criação.endereco,
      data_criacao: Date.now()
    })
  }

  async listarPorId(id: number): Promise<ICadastroUsuario[]> {
    return await CadastroUsuarioSchema.findAll({
      where: {
        id: id
      },
      raw: true
    })
  }

  async listarTodos(): Promise<ICadastroUsuario[]> {
    return await CadastroUsuarioSchema.findAll({
      raw: true
    })
  }
}
