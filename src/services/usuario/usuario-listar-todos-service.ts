import { IUsuario } from '@interfaces/usuario/usuario-interface'
import { UsuarioSchema } from '@schemas/usuario/usuario-schema'

export async function usuarioListarTodosService (usuario_query: UsuarioSchema): Promise<IUsuario[]> {
  const lista_usuario =  await usuario_query.listarTodos()
  if (lista_usuario && lista_usuario.length > 0) {
    return []
  }

  return lista_usuario
}
