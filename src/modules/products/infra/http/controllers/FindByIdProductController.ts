import { ProductNotFoundError } from '@shared/errors/ProductNotFoundError'
import { Request, Response } from 'express'
import { FindByIdProductService } from 'src/modules/products/service/FindByIdProductService'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class FindByIdProductController {
  public async show(request: Request, response: Response): Promise<Response> {
    // * Campos obrigatórios - verificados pelo ZOD
    const querySchema = z.object({
      id: z.string(),
    })

    // * Separação dos campos obrigatórios para utilização
    const { id } = querySchema.parse(request.query)

    try {
      const service = container.resolve(FindByIdProductService)
      const result = await service.execute(Number(id))
      return response.json(result)
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        return response.status(400).send({ message: error.message })
      }
      throw error
    }
  }
}
