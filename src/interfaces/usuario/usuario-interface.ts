export interface IUsuario {
  id: number
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
  id_condominio: number
  data_criacao: Date
  data_edicao?: Date
}
