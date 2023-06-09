import { UsuarioQuery } from '../../database/models/UsuarioModel'

const usuario_query: UsuarioQuery = new UsuarioQuery()

export const listarTodosUsuario = async (_req: any, res: any) => {
  const resultado = await usuario_query.listarPorId(1)

  return res.send(resultado)
}
