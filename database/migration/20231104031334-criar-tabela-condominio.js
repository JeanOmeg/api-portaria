'use strict'
const DataTypes = require('sequelize/lib/data-types')
const tabela = 'condominio'

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
      apartamentos: {
        type: DataTypes.INTEGER
      },
      blocos: {
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
      freezeTableName: true
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tabela)
  }
}
