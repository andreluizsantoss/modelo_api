import { inject, injectable } from 'tsyringe'
import { IProdutoRepository } from '../domain/repositories/IProdutoRepository'
import { IProduto } from '../domain/models/IProduto'

@injectable()
export class RegisterProductService {
  constructor(
    @inject('ProductRepository')
    private repository: IProdutoRepository,
  ) {}

  async execute(product: IProduto): Promise<void> {
    await this.repository.registerProduct(product)
  }
}
