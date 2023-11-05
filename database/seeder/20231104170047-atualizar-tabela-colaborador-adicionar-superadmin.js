'use strict'
require('dotenv').config()

const tabela = 'colaborador'
let superadmin_id // Variável para armazenar o ID do registro criado

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const data = [
      {
        id_tipo_usuario: 5,
        nome: 'SuperAdmin',
        email: 'superadmin@onportaria.com',
        login: 'SuperAdmin',
        senha: process.env.SENHA_ADMIN,
        telefone: 'telefone',
        endereco: 'endereco',
        numero: 123,
        bairro: 'string',
        cidade: 'string',
        estado: 'string',
        pais: 'string',
        funcao: 'Administrador da Plataforma',
        data_criacao: new Date()
      }
    ]

    const [superadmin] = await queryInterface.bulkInsert(tabela, data)
    superadmin_id = superadmin.id
  },

  async down (queryInterface) {
    if (createdRecordId) {
      await queryInterface.bulkDelete(tabela, { id: superadmin_id })
    }
  }
}
