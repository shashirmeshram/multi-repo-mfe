import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Product } from 'shared-lib';
import { ProductsService, BasketService } from 'shared-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'remoteapp1';
  @Input() name: string | undefined;
  public products: Product[] = [];
  constructor(
    //private dataSignalService: DataSignalService,
    private productsService: ProductsService,
    private basketService: BasketService
  ) {}
  ngOnInit(): void {
   // console.log('this.sendData()',  this.dataSignalService.setData('Data from Sender Component'));
    console.log('ProductsService', this.productsService.getProducts());

    this.products = this.productsService.getProducts();
  }

  dispatchEventFromHostFn() {
    const customEvent = new CustomEvent('event', {
      detail: { data: 'Hello from mfe1' },
    });

    const event = new CustomEvent('event', { detail: 'hello from mfe1' });
    dispatchEvent(event);
  }

  // sendData() {
  //   this.dataSignalService.setData('Data from Sender Component');
  // }

  public addToBasket(productId: number): void {
    const product = this.products.find((p) => p.id === productId) as Product;
    console.log("product", product)
    this.basketService.addToBasket(product);
  }

  public notifyPurchase = false;
  @Input() public product!: Product;
  @Output() public purchase: EventEmitter<number> = new EventEmitter<number>();

  public purchaseProduct(): void {
    this.notifyPurchase = true;
    this.purchase.emit(this.product.id);
    setTimeout(() => (this.notifyPurchase = false), 3000);
  }
}
