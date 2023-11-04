'use strict'
const DataTypes = require('sequelize/lib/data-types')
const tabela = 'colaborador'

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
        allowNull: false,
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
        allowNull: false,
        unique: true
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      senha: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numero: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      complemento: {
        type: DataTypes.STRING
      },
      bairro: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pais: {
        type: DataTypes.STRING,
        allowNull: false
      },
      funcao: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Porteiro'
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
