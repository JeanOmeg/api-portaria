export interface IUsuarioLogado {
  id_usuario: number,
  id_condominio: number,
  id_tipo_usuario: number,
  nome: string,
  login: string,
}

export interface IUsuarioLogado {
  token?: string
  refresh_token?: string
}
