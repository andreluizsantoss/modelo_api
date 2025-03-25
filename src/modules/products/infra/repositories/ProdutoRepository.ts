import { prisma } from '@shared/http/lib/prisma'
import { IProduto } from '../../domain/models/IProduto'
import { IProdutoRepository } from '../../domain/repositories/IProdutoRepository'
import { injectable } from 'tsyringe'

@injectable()
export class ProdutoRepository implements IProdutoRepository {
  async findAllProducts(): Promise<IProduto[]> {
    const products = await prisma.produto.findMany()
    return products
  }

  async findByIdProduct(id: number): Promise<IProduto | null> {
    const product = await prisma.produto.findUnique({
      where: {
        id: id,
      },
    })
    return product
  }

  async registerProduct(product: IProduto): Promise<void> {
    await prisma.produto.create({
      data: {
        nome: product.nome,
        marca: product.marca,
        tamanho: product.tamanho,
        cor: product.cor,
      },
    })
  }

  async updateProduct(product: IProduto): Promise<void> {
    await prisma.produto.update({
      where: {
        id: product.id,
      },
      data: {
        nome: product.nome,
        marca: product.marca,
        tamanho: product.tamanho,
        cor: product.cor,
      },
    })
  }

  async deleteByIdProduct(id: number): Promise<void> {
    await prisma.produto.delete({
      where: {
        id: id,
      },
    })
  }
}
