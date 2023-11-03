import { DataTypes } from 'sequelize'
import { db } from '@services/db'
import { ILogin } from '@interfaces/login/login-interface'
import { ETabela, lista_tabela_enum } from '@enums/tabela-enum'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    timestamps: false,
    freezeTableName: true
  }
)
