import { DataTypes } from 'sequelize'
import { db } from '@util/db'
import { ILogin } from '@interface/login/login-interface'
import { ETabela, lista_tabela_enum } from '@enum/tabela-enum'

export const LoginModel = db.define<any, ILogin>(
  lista_tabela_enum[ETabela.login].label,
  {
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
        model: lista_tabela_enum[ETabela.condominio].label,
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
