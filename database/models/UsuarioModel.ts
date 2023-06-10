import { DataTypes } from 'sequelize'
import { db_connection } from '../config/database'
import { IUsuario } from '../interfaces/IUsuario'

const tabela = 'usuario'

export const UsuarioSchema = db_connection.define(
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

  async listarPorId(id: number): Promise<IUsuario[]> {
    return (await UsuarioSchema.findAll({
      where: {
        id: id
      },
      raw: true
    })) as unknown as IUsuario[]
  }
}
