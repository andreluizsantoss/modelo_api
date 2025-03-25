import { inject, injectable } from 'tsyringe'
import { IProdutoRepository } from '../domain/repositories/IProdutoRepository'
import { IProduto } from '../domain/models/IProduto'
import { ProductNotFoundError } from '@shared/errors/ProductNotFoundError'

@injectable()
export class UpdateProductService {
  constructor(
    @inject('ProductRepository')
    private repository: IProdutoRepository,
  ) {}

  async execute(product: IProduto): Promise<void> {
    // * Verificando se o ID existe no banco de dados para excluir
    const result = await this.repository.findByIdProduct(product.id)

    // * Se não existir dispara erro para o usuário e não deleta
    if (!result) {
      throw new ProductNotFoundError()
    }

    // * Caso exista o produto - atualiza as informações
    await this.repository.updateProduct(product)
  }
}
