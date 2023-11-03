import app from './app'

const porta = Number(process.env.PORTA) || 3000
const url = process.env.URL

app.listen(porta, () => {
  console.log(`Servidor rodando em ${url}${porta}`)
})
