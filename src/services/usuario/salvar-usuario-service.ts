import { ICadastroUsuario } from '@interfaces/usuario/cadastro-usuario'
import { CadastroUsuarioQuery } from '@models/usuario/cadastro-usuario-model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function salvarUsuarioService (usuario_query: CadastroUsuarioQuery, dados_criação: ICadastroUsuario): Promise<any> {
  if (!dados_criação.nome) {
    throw new Error('Preencha o campo nome corretamente')
  } else if (!dados_criação.email) {
    throw new Error('Preencha o campo email corretamente')
  } else if (!dados_criação.login) {
    throw new Error('Preencha o campo login corretamente')
  } else if (!dados_criação.senha) {
    throw new Error('Preencha o campo senha corretamente')
  } else  if (!dados_criação.telefone) {
    throw new Error('Preencha o campo telefone corretamente')
  } else if (!dados_criação.endereco) {
    throw new Error('Preencha o campo endereco corretamente')
  }

  const cadastro = await usuario_query.listarPorEmailELogin(dados_criação.email, dados_criação.login)
  if (cadastro) {
    throw new Error('Email ou login já cadastrado')
  }

  return await usuario_query.salvarUsuario(dados_criação)
}
