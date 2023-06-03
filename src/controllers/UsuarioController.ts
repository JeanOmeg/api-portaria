import UsuarioModel from '../db/models/UsuarioModel'

export const listarTodosUsuario = async (req: any, res: any) => {
  // Descomente o código para criar um usuario de teste e visualizar o retorno

  // await UsuarioModel.create({
  //   nome: 'Jean Fernandes',
  //   email: 'jean@email.com',
  //   telefone: '9999999999',
  //   endereco: 'rua fulano de tal 2023',
  //   admin: true,
  //   data_criacao: Date.now(),
  //   data_edicao: Date.now()
  // })

  const resultado = await UsuarioModel.listarPorId(1)

  return res.send(resultado)
}
