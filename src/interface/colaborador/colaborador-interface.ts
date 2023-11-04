export interface IColaborador {
  id: number
  id_condominio: number
  id_tipo_usuario: string
  nome: string
  email: string
  login: string
  senha: string
  telefone: string
  endereco: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  estado: string
  pais: string
  funcao: string
  data_criacao: Date
  data_edicao?: Date
}