export interface ICondomino {
  id: number
  id_condominio: number
  id_tipo_usuario: string
  nome: string
  email: string
  login: string
  senha: string
  apartamento: number
  bloco: number
  garagem: boolean
  vaga: string
  telefone: string
  observacao: string
  data_criacao: Date
  data_edicao?: Date
}
