export enum EFuncao {
  porteiro = 0,
  seguranca = 1,
  zelador = 2,
  sindico = 3,
  admin = 4
}

export const lista_funcao_enum = [
  { value: EFuncao.porteiro, label: 'Porteiro', ordem: 1 },
  { value: EFuncao.seguranca, label: 'Segurança', ordem: 2 },
  { value: EFuncao.zelador, label: 'Zelador', ordem: 3 },
  { value: EFuncao.sindico, label: 'Síndico', ordem: 4 },
  { value: EFuncao.admin, label: 'Administrador', ordem: 5 }
]
