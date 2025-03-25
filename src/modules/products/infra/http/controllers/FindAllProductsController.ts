import { Request, Response } from 'express'
import { FindAllProductsService } from 'src/modules/products/service/FindAllProductsService'
import { container } from 'tsyringe'

export default class FindAllProductsController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(FindAllProductsService)
      const result = await service.execute()
      return response.json(result)
    } catch (error) {
      throw error
    }
  }
}
