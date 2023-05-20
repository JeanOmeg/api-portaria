import UsuarioModel from '../models/UsuarioModel'

export const listarTodosUsuario = async (req: any, res: any) => {
  await UsuarioModel.create({ id: 1 })
  const lista_usuario_db = await UsuarioModel.findAll()
  console.log(lista_usuario_db)
  return res.send({ message: 'message' })
}
