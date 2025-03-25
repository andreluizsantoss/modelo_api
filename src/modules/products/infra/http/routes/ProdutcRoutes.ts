import { Router } from 'express'
import { container } from 'tsyringe'
import FindAllProductsController from '../controllers/FindAllProductsController'

const productRouter = Router()

const findAllProductsController = container.resolve(FindAllProductsController)

productRouter.get('/', (request, response, next) => {
  findAllProductsController.show(request, response).catch(next)
})

export default productRouter
