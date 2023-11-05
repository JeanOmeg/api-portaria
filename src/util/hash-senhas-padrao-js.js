/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
const bcrypt = require('bcrypt')
require('dotenv').config()

const hashSenhasPadraoJs = async () => {
  const senha_padrao_colaborador = await bcrypt.hash(process.env.SENHA_COLABORADOR, Number(process.env.SALT))
  const senha_padrao_condomino = await bcrypt.hash(process.env.SENHA_CONDOMINO, Number(process.env.SALT))
  const senha_padrao_sindico = await bcrypt.hash(process.env.SENHA_SINDICO, Number(process.env.SALT))
  const senha_padrao_administrador = await bcrypt.hash(process.env.SENHA_ADMINISTRADOR, Number(process.env.SALT))
  const senha_padrao_superadmin = await bcrypt.hash(process.env.SENHA_SUPERADMIN, Number(process.env.SALT))

  return {
    senha_padrao_colaborador,
    senha_padrao_condomino,
    senha_padrao_sindico,
    senha_padrao_administrador,
    senha_padrao_superadmin
  }
}

module.exports = { hashSenhasPadraoJs }
