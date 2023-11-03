import { IColaborador } from '@interface/colaborador/colaborador-interface'
import { ColaboradorSchema } from '@schema/colaborador/colaborador-schema'

export async function salvarColaboradorService (colaborador_schema: ColaboradorSchema, dados_criação: IColaborador): Promise<IColaborador> {
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

  const cadastro = await colaborador_schema.listarPorEmailELogin(dados_criação.email, dados_criação.login)
  if (cadastro) {
    throw new Error('Email ou login já cadastrado')
  }

  return await colaborador_schema.salvarColaborador(dados_criação)
}
