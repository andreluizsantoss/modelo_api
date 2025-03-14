// * Importação de bibliotecas
import 'dotenv/config'
import express, { Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'

// * Instanciando o Express
const app = express()

// * Habilitar o CORS
app.use(cors())

// * Determina que as respostas do servidor sejam em JSON
app.use(express.json())

// * Chamada utilizando - ARROW FUNCTION (=>)
app.get('/', (request, response) => {
  response.json({
    message: 'Deu tudo certo !!!!!',
  })
})

// * Subir e verificar se o servidor esta ativo
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT} !!!`)
})
