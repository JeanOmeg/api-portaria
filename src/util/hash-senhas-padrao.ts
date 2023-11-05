import bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'

dotenv.config()

export const hashSenhasPadrao = async () => {
  const senha_padrao_colaborador = await bcrypt.hash(process.env.SENHA_COLABORADOR as string, Number(process.env.SALT))
  const senha_padrao_condomino = await bcrypt.hash(process.env.SENHA_CONDOMINO as string, Number(process.env.SALT))
  const senha_padrao_sindico = await bcrypt.hash(process.env.SENHA_SINDICO as string, Number(process.env.SALT))
  const senha_padrao_administrador = await bcrypt.hash(process.env.SENHA_ADMINISTRADOR as string, Number(process.env.SALT))
  const senha_padrao_superadmin = await bcrypt.hash(process.env.SENHA_SUPERADMIN as string, Number(process.env.SALT))

  return {
    senha_padrao_colaborador,
    senha_padrao_condomino,
    senha_padrao_sindico,
    senha_padrao_administrador,
    senha_padrao_superadmin
  }
}
