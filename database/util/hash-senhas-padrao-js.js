const bcrypt = require('bcrypt')
require('dotenv').config()

async function hashSenhasPadraoJs () {
  const senha_padrao = await bcrypt.hash(process.env.BCRYPT, Number(process.env.SALT))

  return senha_padrao
}

module.exports = { hashSenhasPadraoJs }
