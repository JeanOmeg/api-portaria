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
      role: {
        type: DataTypes.STRING,
        allowNull: false
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
      freezeTableName: true
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tabela)
  }
}
