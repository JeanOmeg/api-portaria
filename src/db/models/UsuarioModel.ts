import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/database'

class UsuarioModel extends Model {}

UsuarioModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  },
  {
    tableName: 'usuario',
    timestamps: false,
    sequelize
  }
)

export default UsuarioModel
