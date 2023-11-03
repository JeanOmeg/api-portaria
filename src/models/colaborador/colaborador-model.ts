import { DataTypes } from 'sequelize'
import { db } from '@services/db'
import { IColaborador } from '@interfaces/usuario/colaborador-interface'
import { EFuncao, lista_funcao_enum } from '@enums/funcao-enum'
import { ETabela, lista_tabela_enum } from '@enums/tabela-enum'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ColaboradorModel = db.define<any, IColaborador>(
  lista_tabela_enum[ETabela.colaborador].label,
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
    tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: lista_tabela_enum[ETabela.tipo_usuario].label,
        key: 'role'
      }
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
      type: DataTypes.STRING(500),
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    complemento: {
      type: DataTypes.STRING
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false
    },
    funcao: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: lista_funcao_enum[EFuncao.porteiro].label
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
    timestamps: false,
    freezeTableName: true
  }
)
