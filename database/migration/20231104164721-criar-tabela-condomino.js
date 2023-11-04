'use strict'
const DataTypes = require('sequelize/lib/data-types')
const tabela = 'condomino'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(tabela, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_condominio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'condominio',
          key: 'id'
        }
      },
      id_tipo_usuario: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        references: {
          model: 'tipo_usuario',
          key: 'id'
        }
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      login: {
        type: DataTypes.STRING,
        unique: true
      },
      senha: {
        type: DataTypes.STRING(500)
      },
      apartamento: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bloco: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      garagem: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      vaga: {
        type: DataTypes.STRING
      },
      telefone: {
        type: DataTypes.STRING
      },
      observacao: {
        type: DataTypes.STRING(5000)
      },
      data_criacao: {
        type: DataTypes.DATE,
        allowNull: false
      },
      data_edicao: {
        type: DataTypes.DATE
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: 'data_criacao',
      updatedAt: 'data_edicao'
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tabela)
  }
}
