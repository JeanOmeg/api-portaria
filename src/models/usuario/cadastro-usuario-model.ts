import { DataTypes } from 'sequelize'
import { db } from '@services/db'
import { ICadastroUsuario } from '@interfaces/usuario/cadastro-usuario'

const tabela = 'cadastro_usuario'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CadastroUsuarioModel = db.define<any, ICadastroUsuario>(
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
