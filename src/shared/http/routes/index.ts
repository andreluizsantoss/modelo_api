import { Router } from 'express'
import productRouter from 'src/modules/products/infra/http/routes/ProdutcRoutes'

const routes = Router()

// routes.get('/', (request, response) => {
//   response.json({ message: 'tudo ok' })
// })

routes.use('/product', productRouter)

export { routes }
