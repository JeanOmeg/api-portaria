import { CadastroUsuarioQuery } from '@models/usuario/cadastro-usuario-model'
import { ICadastroUsuario } from '@interfaces/usuario/ICadastroUsuario'
import { criarUsuarioService } from '@services/usuario/usuario-criar-service'
import { usuarioListarTodosService } from '@services/usuario/usuario-listar-todos-service'

const usuario_query: CadastroUsuarioQuery = new CadastroUsuarioQuery()

export async function listarTodosUsuarios(_req: any, res: any): Promise<ICadastroUsuario[]> {
  const resultado = await usuarioListarTodosService(usuario_query)

  return res.send(resultado)
}

export async function criarUsuario(req: any, res: any) {
  const dados_criação: ICadastroUsuario = req.body

  try {
    const resultado = await criarUsuarioService(usuario_query, dados_criação)
    return res.send(resultado)
  } catch (error: any) {
    res.send(error.message)
  }
}
