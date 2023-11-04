'use strict'

const tabela = 'tipo_usuario'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const data = [
      {
        role: 'Controlador',
        data_criacao: new Date(),
        data_edicao: new Date()
      },
      {
        role: 'Condomino',
        data_criacao: new Date(),
        data_edicao: new Date()
      },
      {
        role: 'Sindico',
        data_criacao: new Date(),
        data_edicao: new Date()
      },
      {
        role: 'Administrador',
        data_criacao: new Date(),
        data_edicao: new Date()
      }
    ]

    await queryInterface.bulkInsert(tabela, data, {})
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete(tabela, null, {})
  }
}