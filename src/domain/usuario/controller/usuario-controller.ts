import { IUsuario } from '@interface/usuario/usuario-interface'
import { usuarioSalvarService } from '@domain/usuario/service/usuario-salvar-service'
import { usuarioListarTodosService } from '@domain/usuario/service/usuario-listar-todos-service'
import { UsuarioSchema } from '@schema/usuario/usuario-schema'

export module UsuarioController {
  const usuario_schema = new UsuarioSchema()

  export async function usuarioListarTodos (_req: any, res: any): Promise<IUsuario[]> {
    const lista_usuario = await usuarioListarTodosService(usuario_schema)
    return res.status(200).json(lista_usuario)
  }

  export async function usuarioCadastrar (req: any, res: any) {
    try {
      const dados_criação: IUsuario = req.body
      const usuario_cadastrado = await usuarioSalvarService(usuario_schema, dados_criação)
      return res.status(200).json(usuario_cadastrado)
    } catch (error: any) {
      res.status(400).json(error.message)
    }
  }
}
