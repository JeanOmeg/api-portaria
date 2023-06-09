import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/database'
import { IUsuario } from '../interfaces/IUsuario'

const tabela = 'usuario'

export const UsuarioSchema = sequelize.define(
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
      allowNull: false
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

  async listarPorId(id: number): Promise<IUsuario[] | null> {
    return (await UsuarioSchema.findAll({
      where: {
        id: id
      }
    })) as unknown as IUsuario[]
  }
}
