import { DataTypes } from 'sequelize'
import { db } from '@util/db'
import { ILogin } from '@interface/login/login-interface'

const tabela = 'login'

export const LoginModel = db.define<any, ILogin>(
  tabela, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
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
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    refresh_token: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'data_criacao',
    updatedAt: 'data_edicao'
  }
)