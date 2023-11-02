import { ICadastroUsuario } from '@interfaces/usuario/cadastro-usuario'
import { CadastroUsuarioSchema } from '@schemas/usuario/cadastro-usuario-schema'

export async function usuarioListarTodosService (usuario_query: CadastroUsuarioSchema): Promise<ICadastroUsuario[]> {
  const lista_usuario =  await usuario_query.listarTodos()
  if (lista_usuario && lista_usuario.length > 0) {
    return []
  }

  return lista_usuario
}
