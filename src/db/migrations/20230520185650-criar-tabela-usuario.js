'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('usuario', { id: Sequelize.INTEGER })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('usuario')
  }
}
