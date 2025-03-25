import { inject, injectable } from 'tsyringe'
import { IProdutoRepository } from '../domain/repositories/IProdutoRepository'
import { ProductNotFoundError } from '@shared/errors/ProductNotFoundError'

@injectable()
export class DeleteByIdProductService {
  constructor(
    @inject('ProductRepository')
    private repository: IProdutoRepository,
  ) {}

  async execute(id: number): Promise<void> {
    // * Verificando se o ID existe no banco de dados para excluir
    const result = await this.repository.findByIdProduct(id)

    // * Se não existir dispara erro para o usuário e não deleta
    if (!result) {
      throw new ProductNotFoundError()
    }

    // * Se exitir o produto faz o delete
    await this.repository.deleteByIdProduct(id)
  }
}
