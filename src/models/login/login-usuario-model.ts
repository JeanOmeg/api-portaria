import { DataTypes } from 'sequelize'
import { db } from '@services/db'
import { ILoginUsuario } from '@interfaces/login/login-usuario'

const tabela = 'login_usuario'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LoginUsuarioSchema = db.define<any, ILoginUsuario>(
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

export class LoginUsuarioQuery {
  schema () {
    return LoginUsuarioSchema
  }

  async logarUsuario (dados_criação: ILoginUsuario): Promise<ILoginUsuario> {
    return await LoginUsuarioSchema.create({
      email: dados_criação.email,
      login: dados_criação.login,
      token: dados_criação.token,
      refresh_token: dados_criação.refresh_token,
      data_criacao: Date.now()
    })
  }
}
