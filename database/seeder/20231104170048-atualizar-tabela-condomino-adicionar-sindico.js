'use strict'

const tabela = 'colaborador'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    // const data = [
    //   {
    //     role: 'Controlador',
    //     data_criacao: new Date()
    //   },
    //   {
    //     role: 'Condomino',
    //     data_criacao: new Date()
    //   },
    //   {
    //     role: 'Sindico',
    //     data_criacao: new Date()
    //   },
    //   {
    //     role: 'Administrador',
    //     data_criacao: new Date()
    //   }
    // ]

    await queryInterface.bulkInsert(tabela, data, {})
  },

  async down (queryInterface) {
    // await queryInterface.bulkDelete(tabela, null, {})
  }
}
