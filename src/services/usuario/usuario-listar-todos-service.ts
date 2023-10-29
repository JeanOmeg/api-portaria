import { ICadastroUsuario } from '@interfaces/usuario/cadastro-usuario'
import { CadastroUsuarioQuery } from '@models/usuario/cadastro-usuario-model'

export async function usuarioListarTodosService (usuario_query: CadastroUsuarioQuery): Promise<ICadastroUsuario[]> {
  return usuario_query.listarTodos()
}
