import { inject, injectable } from 'tsyringe'
import { IProduto } from '../domain/models/IProduto'
import { IProdutoRepository } from '@product/domain/repositories/IProdutoRepository'

@injectable()
export class FindAllProductsService {
  constructor(
    @inject('productRepository')
    private repository: IProdutoRepository,
  ) {}

  async execute(): Promise<IProduto[]> {
    const products = await this.repository.findAllProducts()
    return products
  }
}
