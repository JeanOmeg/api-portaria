import { DataTypes } from 'sequelize'
import { db } from '@util/db'
import { ICondominio } from '@interface/condominio/condominio-interface'
import { ETabela, lista_tabela_enum } from '@enum/tabela-enum'

const tabela = lista_tabela_enum[ETabela.condominio].label

export const CondominioModel = db.define<any, ICondominio>(
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
    contato_condominio: {
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
      type: DataTypes.STRING,
      allowNull: false
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cidade: {
      type: DataTypes.INTEGER,
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
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blocos: {
      type: DataTypes.INTEGER
    },
    apartamentos: {
      type: DataTypes.INTEGER
    },
    sindico: {
      type: DataTypes.STRING
    },
    contato_sindico: {
      type: DataTypes.STRING
    },
    administradora: {
      type: DataTypes.STRING
    },
    contato_administradora: {
      type: DataTypes.STRING
    },
    seguranca: {
      type: DataTypes.STRING
    },
    contato_seguranca: {
      type: DataTypes.STRING
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
    timestamps: true,
    createdAt: 'data_criacao',
    updatedAt: 'data_edicao'
  }
)
