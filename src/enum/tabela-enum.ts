export enum ETabela {
  tipo_usuario = 0,
  condominio = 1,
  colaborador = 2,
  condomino = 3,
  visitante = 4,
  prestador_servico = 5,
  login = 6
}

export const lista_tabela_enum = [
  { value: ETabela.tipo_usuario, label: 'tipo_usuario', ordem: 1 },
  { value: ETabela.condominio, label: 'condominio', ordem: 2 },
  { value: ETabela.colaborador, label: 'colaborador', ordem: 3 },
  { value: ETabela.condomino, label: 'condomino', ordem: 4 },
  { value: ETabela.visitante, label: 'visitante', ordem: 5 },
  { value: ETabela.prestador_servico, label: 'prestador_servico', ordem: 6 },
  { value: ETabela.login, label: 'login', ordem: 7 }
]
