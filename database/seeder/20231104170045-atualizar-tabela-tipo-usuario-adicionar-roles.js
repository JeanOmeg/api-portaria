'use strict'

const tabela = 'tipo_usuario'
let tipo_usuario_id = []

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const data = [
      {
        role: 'Controlador',
        data_criacao: new Date()
      },
      {
        role: 'Condomino',
        data_criacao: new Date()
      },
      {
        role: 'Sindico',
        data_criacao: new Date()
      },
      {
        role: 'Administrador',
        data_criacao: new Date()
      },
      {
        role: 'SuperAdmin',
        data_criacao: new Date()
      }
    ]

    const tipo_usuario = await queryInterface.bulkInsert(tabela, data)
    tipo_usuario_id = tipo_usuario.map(tipo => tipo.id)
  },

  async down (queryInterface) {
    if (createdRecordIds.length > 0) {
      await queryInterface.bulkDelete(tabela, { id: tipo_usuario_id })
    }
  }
}
