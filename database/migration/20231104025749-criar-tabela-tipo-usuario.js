'use strict'
const DataTypes = require('sequelize/lib/data-types')
const tabela = 'tipo_usuario'

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
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: 'data_criacao',
      updatedAt: 'data_edicao'
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tabela)
  }
}
