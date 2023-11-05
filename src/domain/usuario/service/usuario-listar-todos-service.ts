import { IUsuario } from '@interface/usuario/usuario-interface'
import { UsuarioSchema } from '@schema/usuario/usuario-schema'

export async function usuarioListarTodosService (usuario_schema: UsuarioSchema): Promise<IUsuario[]> {
  return await usuario_schema.listarTodos()
}
