import { ICadastroUsuario } from '@interfaces/usuario/cadastro-usuario'
import { salvarUsuarioService } from '@services/usuario/salvar-usuario-service'
import { usuarioListarTodosService } from '@services/usuario/usuario-listar-todos-service'
import { CadastroUsuarioSchema } from 'src/schemas/usuario/cadastro-usuario-schema'

const cadastro_usuario_schema = new CadastroUsuarioSchema()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function listarTodosUsuarios (_req: any, res: any): Promise<ICadastroUsuario[]> {
  const lista_usuario = await usuarioListarTodosService(cadastro_usuario_schema)
  return res.status(200).json(lista_usuario)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function salvarUsuario (req: any, res: any) {
  try {
    const dados_criação: ICadastroUsuario = req.body
    const usuario_cadastrado = await salvarUsuarioService(cadastro_usuario_schema, dados_criação)
    return res.status(200).json(usuario_cadastrado)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json(error.message)
  }
}
