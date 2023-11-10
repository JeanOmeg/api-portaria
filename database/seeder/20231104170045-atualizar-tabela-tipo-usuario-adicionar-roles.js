'use strict'

const tabela = 'tipo_usuario'

const lista_roles = [
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

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(tabela, lista_roles)
  }
}
