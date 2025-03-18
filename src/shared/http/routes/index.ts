import { AppError } from '@shared/errors/app_error'
import { Router } from 'express'

const routes = Router()

// * Chamada utilizando - ARROW FUNCTION (=>)
routes.get('/', (request, response) => {
  // throw new AppError('Servidor já era !!!', 503)
  throw new Error()
  response.json({
    message: 'Deu tudo certo !!!!!',
  })
})

const teste = 'apenas testar'

export { routes, teste }
