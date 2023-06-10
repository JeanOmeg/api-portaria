import { UsuarioQuery } from '../../../database/models/usuario/UsuarioModel'
import { IUsuario } from '../../interfaces/usuario/IUsuario'
import { criarUsuarioService } from '../../services/usuario/usuario-criar-service'
import { usuarioListarTodosService } from '../../services/usuario/usuario-listar-todos-service'

const usuario_query: UsuarioQuery = new UsuarioQuery()

export async function listarTodosUsuarios(req: any, res: any): Promise<IUsuario[]> {
  const resultado = await usuarioListarTodosService(usuario_query)

  return res.send(resultado)
}

export async function criarUsuario(req: any, res: any) {
  const dados_criação: IUsuario = req.body

  try {
    const resultado = await criarUsuarioService(usuario_query, dados_criação)
    return res.send(resultado)
  } catch (error: any) {
    res.send(error.errors[0].message)
  }
}
