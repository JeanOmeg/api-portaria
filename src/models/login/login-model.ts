import { DataTypes } from 'sequelize'
import { db } from '@services/db'
import { ILogin } from '@interfaces/login/login-interface'

const tabela = 'login'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LoginModel = db.define<any, ILogin>(
  tabela,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    id_condominio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'condominio',
        key: 'id'
      }
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'login'
      }
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
