import { IProdutoRepository } from 'src/modules/products/domain/repositories/IProdutoRepository'
import FindAllProductsController from 'src/modules/products/infra/http/controllers/FindAllProductsController'
import { ProdutoRepository } from 'src/modules/products/infra/repositories/ProdutoRepository'
import { container } from 'tsyringe'

container.registerSingleton<IProdutoRepository>(
  'productRepository',
  ProdutoRepository,
)

container.registerSingleton(
  'FindAllProductsController',
  FindAllProductsController,
)
