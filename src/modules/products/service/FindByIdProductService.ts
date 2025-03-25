import { inject, injectable } from 'tsyringe'
import { IProdutoRepository } from '../domain/repositories/IProdutoRepository'
import { IProduto } from '../domain/models/IProduto'
import { ProductNotFoundError } from '@shared/errors/ProductNotFoundError'

@injectable()
export class FindByIdProductService {
  constructor(
    @inject('ProductRepository')
    private repository: IProdutoRepository,
  ) {}

  async execute(id: number): Promise<IProduto | null> {
    const result = await this.repository.findByIdProduct(id)

    if (!result) {
      throw new ProductNotFoundError()
    }

    return result
  }
}
