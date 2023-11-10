import { DataTypes, Sequelize } from 'sequelize'
import { db } from '@util/db'
import { ITipoUsuario } from '@interface/tipo-usuario/tipo-usuario-interface'

const tabela = 'tipo_usuario'

export const TipoUsuarioModel = db.define<any, ITipoUsuario>(
  tabela,
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: Sequelize.literal('uuid_generate_v4()')
    },
    role: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_edicao: {
      type: DataTypes.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)
