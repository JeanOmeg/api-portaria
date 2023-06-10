import { IUsuario } from '../../interfaces/usuario/IUsuario'
import { UsuarioQuery } from '../../../database/models/usuario/UsuarioModel'

export async function criarUsuarioService(usuario_query: UsuarioQuery, dados_criação: IUsuario): Promise<IUsuario[]> {
  return await usuario_query.criarUsuario(dados_criação)
}
