'use strict'

const tabela = 'login_usuario'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(tabela, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      login: {
        type: Sequelize.STRING,
        allowNull: false
      },
      token: {
        type: Sequelize.STRING(5000),
        allowNull: false
      },
      refresh_token: {
        type: Sequelize.STRING(5000),
        allowNull: false
      },
      data_criacao: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tabela)
  }
}
