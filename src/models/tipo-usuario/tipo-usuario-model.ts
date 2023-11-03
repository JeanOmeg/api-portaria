import { DataTypes } from 'sequelize'
import { db } from '@services/db'
import { ITipoUsuario } from '@interfaces/tipo-usuario/tipo-usuario-interface'

const tabela = 'tipo-usuario'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TipoUsuarioModel = db.define<any, ITipoUsuario>(
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
    role: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
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
