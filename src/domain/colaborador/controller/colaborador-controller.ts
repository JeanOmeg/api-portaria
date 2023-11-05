import { IColaborador } from '@interface/colaborador/colaborador-interface'
import { salvarColaboradorService } from '@domain/colaborador/service/salvar-colaborador-service'
import { colaboradorListarTodosService } from '@domain/colaborador/service/colaborador-listar-todos-service'
import { ColaboradorSchema } from '@schema/colaborador/colaborador-schema'

export module ColaboradorController {
  const colaborador_schema = new ColaboradorSchema()

  export async function listarTodosColaboradores (_req: any, res: any): Promise<IColaborador[]> {
    const lista_usuario = await colaboradorListarTodosService(colaborador_schema)
    return res.status(200).json(lista_usuario)
  }

  export async function cadastrarColaborador (req: any, res: any) {
    try {
      const dados_criação: IColaborador = req.body
      const usuario_cadastrado = await salvarColaboradorService(colaborador_schema, dados_criação)
      return res.status(200).json(usuario_cadastrado)
    } catch (error: any) {
      res.status(400).json(error.message)
    }
  }
}
