import { ICadastroUsuario } from '@interfaces/usuario/cadastro-usuario'
import { CadastroUsuarioQuery } from '@models/usuario/cadastro-usuario-model'

export async function usuarioListarTodosService (usuario_query: CadastroUsuarioQuery): Promise<ICadastroUsuario[]> {
  const lista_usuario =  await usuario_query.listarTodos()
  if (lista_usuario && lista_usuario.length > 0) {
    return []
  }

  return lista_usuario
}
