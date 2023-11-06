export interface IUsuario {
  id: number
  id_condominio: number
  id_tipo_usuario: number
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
  apartamento: number
  bloco: number
  garagem: boolean
  vaga: string
  observacao: string
  data_criacao: Date
  data_edicao?: Date
}