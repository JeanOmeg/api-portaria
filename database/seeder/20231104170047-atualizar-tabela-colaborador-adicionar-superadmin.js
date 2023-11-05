'use strict'
const { hashSenhasPadraoJs } = require('../../src/util/hash-senhas-padrao-js')
const tabela = 'colaborador'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const seedData = async () => {
      const data = [
        {
          id_tipo_usuario: 5,
          nome: 'SuperAdmin',
          email: 'superadmin@onportaria.com',
          login: 'SuperAdmin',
          senha: (await hashSenhasPadraoJs()).senha_padrao_superadmin,
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

    return seedData()
  }
}
