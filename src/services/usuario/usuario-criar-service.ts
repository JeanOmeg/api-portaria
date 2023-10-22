import { ICadastroUsuario } from '../../interfaces/usuario/ICadastroUsuario'
import { CadastroUsuarioQuery } from '../../models/usuario/cadastro-usuario-model'

export async function criarUsuarioService(usuario_query: CadastroUsuarioQuery, dados_criação: ICadastroUsuario): Promise<ICadastroUsuario> {
  return await usuario_query.criarUsuario(dados_criação)
}
