export interface ICadastroUsuario {
  id: number
  nome: string
  email: string
  login: string
  senha: string
  telefone: string
  endereco: string
  admin: boolean
  data_criacao: Date
  data_edicao?: Date
}
