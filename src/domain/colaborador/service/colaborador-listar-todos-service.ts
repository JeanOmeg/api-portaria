import { IColaborador } from '@interface/colaborador/colaborador-interface'
import { ColaboradorSchema } from '@schema/colaborador/colaborador-schema'

export async function colaboradorListarTodosService (colaborador_schema: ColaboradorSchema): Promise<IColaborador[]> {
  const lista_colaborador =  await colaborador_schema.listarTodos()
  if (lista_colaborador && lista_colaborador.length > 0) {
    return []
  }

  return lista_colaborador
}
