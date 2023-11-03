import { IUsuario } from '@interfaces/usuario/usuario-interface'
import { salvarUsuarioService } from '@services/usuario/salvar-usuario-service'
import { usuarioListarTodosService } from '@services/usuario/usuario-listar-todos-service'
import { UsuarioSchema } from '@schemas/usuario/usuario-schema'

export module UsuarioController {
  const usuario_schema = new UsuarioSchema()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export async function listarTodosUsuarios (_req: any, res: any): Promise<IUsuario[]> {
    const lista_usuario = await usuarioListarTodosService(usuario_schema)
    return res.status(200).json(lista_usuario)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export async function cadastrarUsuario (req: any, res: any) {
    try {
      const dados_criação: IUsuario = req.body
      const usuario_cadastrado = await salvarUsuarioService(usuario_schema, dados_criação)
      return res.status(200).json(usuario_cadastrado)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res.status(400).json(error.message)
    }
  }
}

