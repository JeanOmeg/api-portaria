import { DataTypes } from 'sequelize'
import { db } from '@util/db'
import { ITipoUsuario } from '@interface/tipo-usuario/tipo-usuario-interface'
import { ETabela, lista_tabela_enum } from '@enum/tabela-enum'

export const TipoUsuarioModel = db.define<any, ITipoUsuario>(
  lista_tabela_enum[ETabela.tipo_usuario].label,
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
