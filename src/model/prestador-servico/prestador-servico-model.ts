import { DataTypes } from 'sequelize'
import { db } from '@util/db'
import { IPrestadorServico } from '@interface/prestador-servico/prestador-servico-interface'

const tabela = 'prestador_servico'

export const PrestadorServicoModel = db.define<any, IPrestadorServico>(
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
    id_condomino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'condomino',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apartamento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bloco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    garagem: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    vaga: {
      type: DataTypes.STRING
    },
    servico: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contato: {
      type: DataTypes.STRING
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
    data_entrada: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_saida: {
      type: DataTypes.DATE,
      allowNull: false
    },
    observacao: {
      type: DataTypes.STRING(5000)
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
).addHook('beforeCreate', 'setTimestamps', (instance) => {
  instance.data_criacao = new Date()
}).addHook('beforeUpdate', 'updateTimestamps', (instance) => {
  instance.updatedAt = new Date()
})
