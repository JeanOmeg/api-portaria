import { IUsuario } from '../../interfaces/usuario/IUsuario'
import { UsuarioQuery } from '../../../database/models/usuario/UsuarioModel'

export async function usuarioListarTodosService(usuario_query: UsuarioQuery): Promise<IUsuario[]> {
  return usuario_query.listarTodos()
}
