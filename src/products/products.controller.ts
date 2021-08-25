import { Controller, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addProducts(): any {}
}
