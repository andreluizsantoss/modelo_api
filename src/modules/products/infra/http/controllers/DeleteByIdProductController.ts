import { ProductNotFoundError } from '@shared/errors/ProductNotFoundError'
import { Request, Response } from 'express'
import { DeleteByIdProductService } from 'src/modules/products/service/DeleteByIdProductService'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class DeleteByIdProductController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      id: z.string(),
    })
    const { id } = querySchema.parse(request.query)
    try {
      const service = container.resolve(DeleteByIdProductService)
      await service.execute(Number(id))
      return response.status(200).send()
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        return response.status(400).send({ message: error.message })
      }
      throw error
    }
  }
}
