'use strict'

const tabela = 'tipo_usuario'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const data = [
      {
        role: 'Controlador',
        data_criação: new Date()
      },
      {
        role: 'Condomino',
        data_criação: new Date()
      },
      {
        role: 'Sindico',
        data_criação: new Date()
      },
      {
        role: 'Administrador',
        data_criação: new Date()
      },
      {
        role: 'SuperAdmin',
        data_criação: new Date()
      }
    ]

    await queryInterface.bulkInsert(tabela, data)
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete(tabela, null)
  }
}
