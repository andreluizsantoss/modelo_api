import { IProduto } from '../models/IProduto'

export interface IProdutoRepository {
  findAllProducts(): Promise<IProduto[]>
  findByIdProduct(id: number): Promise<IProduto | null>
  registerProduct(product: IProduto): Promise<void>
  updateProduct(product: IProduto): Promise<void>
  deleteByIdProduct(id: number): Promise<void>
}
