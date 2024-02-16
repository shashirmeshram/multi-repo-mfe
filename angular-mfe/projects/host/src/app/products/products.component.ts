import { Component, OnInit } from '@angular/core';
import {
  BasketService,
  Product,
  ProductsService,
} from 'shared-lib';


import { ProductComponent } from './product.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
  imports: [ProductComponent,NgForOf],
  standalone: true,
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private basketService: BasketService
  ) {}

  public ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  public addToBasket(productId: number): void {
    const product = this.products.find((p) => p.id === productId) as Product;
    console.log("product", product)
    this.basketService.addToBasket(product);
  }
}
