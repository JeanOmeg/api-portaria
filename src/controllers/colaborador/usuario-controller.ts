import { IColaborador } from '@interfaces/usuario/colaborador-interface'
import { salvarColaboradorService } from '@services/colaborador/salvar-colaborador-service'
import { colaboradorListarTodosService } from '@services/colaborador/colaborador-listar-todos-service'
import { ColaboradorSchema } from '@schemas/colaborador/colaborador-schema'

export module ColaboradorController {
  const colaborador_schema = new ColaboradorSchema()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export async function listarTodosColaboradores (_req: any, res: any): Promise<IColaborador[]> {
    const lista_usuario = await colaboradorListarTodosService(colaborador_schema)
    return res.status(200).json(lista_usuario)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export async function cadastrarColaborador (req: any, res: any) {
    try {
      const dados_criação: IColaborador = req.body
      const usuario_cadastrado = await salvarColaboradorService(colaborador_schema, dados_criação)
      return res.status(200).json(usuario_cadastrado)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res.status(400).json(error.message)
    }
  }
}

