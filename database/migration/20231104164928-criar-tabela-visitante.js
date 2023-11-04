'use strict'
const DataTypes = require('sequelize/lib/data-types')
const tabela = 'visitante'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(tabela, {
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
      contato: {
        type: DataTypes.STRING,
        allowNull: false
      },
      apartamento: {
        type: DataTypes.INTEGER
      },
      bloco: {
        type: DataTypes.INTEGER
      },
      garagem: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      vaga: {
        type: DataTypes.STRING
      },
      data_entrada: {
        type: DataTypes.DATE,
        allowNull: false
      },
      data_saida: {
        type: DataTypes.DATE
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
      freezeTableName: true
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tabela)
  }
}
