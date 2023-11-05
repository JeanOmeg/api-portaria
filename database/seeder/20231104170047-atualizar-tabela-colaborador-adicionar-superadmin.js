'use strict'
require('dotenv').config()

const tabela = 'colaborador'

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

    await queryInterface.bulkInsert(tabela, data)
  }
}
