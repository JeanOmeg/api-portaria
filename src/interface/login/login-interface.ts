export interface ILogin {
  id?: number
  id_condominio: number
  id_tipo_usuario: number
  login: string
  senha?: string
  token: string
  refresh_token: string
  data_criacao: Date
}
