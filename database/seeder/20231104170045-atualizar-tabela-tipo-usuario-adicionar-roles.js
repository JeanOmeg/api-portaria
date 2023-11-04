'use strict'

const tabela = 'tipo_usuario'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const data = [
      {
        role: 'Controlador'
      },
      {
        role: 'Condomino'
      },
      {
        role: 'Sindico'
      },
      {
        role: 'Administrador'
      },
      {
        role: 'SuperAdmin'
      }
    ]

    await queryInterface.bulkInsert(tabela, data)
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete(tabela, null)
  }
}
