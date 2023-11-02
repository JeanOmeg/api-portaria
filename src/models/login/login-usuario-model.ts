import { DataTypes } from 'sequelize'
import { db } from '@services/db'
import { ILoginUsuario } from '@interfaces/login/login-usuario'

const tabela = 'login_usuario'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LoginUsuarioModel = db.define<any, ILoginUsuario>(
  tabela,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    refresh_token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)
