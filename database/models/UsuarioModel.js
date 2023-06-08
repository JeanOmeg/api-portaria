"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class UsuarioModel extends sequelize_1.Model {
    static listarPorId(id) {
        return database_1.sequelize.query('SELECT * FROM usuario WHERE id = :id', {
            type: sequelize_1.QueryTypes.SELECT,
            replacements: { id },
            benchmark: true
        });
    }
}
UsuarioModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    data_criacao: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    data_edicao: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'usuario',
    timestamps: false,
    sequelize: database_1.sequelize
});
exports.default = UsuarioModel;
