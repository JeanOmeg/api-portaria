export interface IUsuario {
  id: number
  nome: string
  email: string
  senha: string
  telefone: string
  endereco: string
  admin: boolean
  data_criacao: Date
  data_edicao?: Date
}
