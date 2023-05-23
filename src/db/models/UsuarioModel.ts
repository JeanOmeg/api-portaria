import { Model, DataTypes, QueryTypes } from 'sequelize'
import { sequelize } from '../config/database'
import { IUsuario } from '../../interfaces/IUsuario'

class UsuarioModel extends Model {
  static listarPorId(id: number): Promise<IUsuario[]> {
    return sequelize.query<IUsuario>('SELECT * FROM usuario WHERE id = :id', {
      type: QueryTypes.SELECT,
      replacements: { id },
      benchmark: true
    })
  }
}

UsuarioModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
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
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_edicao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'usuario',
    timestamps: false,
    sequelize
  }
)

export default UsuarioModel
