export interface IVisitante {
  id: number
  id_condominio: number
  id_usuario: string
  nome: string
  documento: string
  contato: string
  apartamento: number
  bloco: number
  garagem: boolean
  vaga: string
  data_entrada: Date
  data_saida: Date
  observacao: string
  data_criacao: Date
  data_edicao?: Date
}
