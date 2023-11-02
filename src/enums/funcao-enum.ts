export enum EFuncao {
  porteiro = 1,
  zelador = 2,
  sindico = 3,
  admin = 4
}

export const lista_funcao_enum = [
  { value: EFuncao.porteiro, label: 'Porteiro', ordem: 1 },
  { value: EFuncao.zelador, label: 'Zelador', ordem: 2 },
  { value: EFuncao.sindico, label: 'Síndico', ordem: 3 },
  { value: EFuncao.admin, label: 'Administrador', ordem: 4 }
]
