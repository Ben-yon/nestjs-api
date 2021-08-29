import { ProductsService } from './products.service';
import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { throws } from 'assert';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  addProducts(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return {
      id: generatedId,
    };
  }

  @Get()
  getAllProduct(): any {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductd(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(@Param('id') prodId: string) {
    9;
  }
}
