import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from 'shared-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'host';
  public products: Product[] = [];
  constructor(
    private productsService: ProductsService
  ) {}

  public ngOnInit(): void {
    this.products = this.productsService.getProducts();
    console.log('products-->', this.products);
  }

  dispatchEventFromHostFn() {
    const customEvent = new CustomEvent('event', {
      detail: { data: 'Hello from Host' },
    });

    const event = new CustomEvent('event', { detail: 'hello from host' });
    dispatchEvent(event);

    // PubSub.publish('test', this.data);
  }
  public notifyPurchase = false;
  public purchaseProduct(): void {
    this.notifyPurchase = true;
    //this.purchase.emit(this.product.id);
    setTimeout(() => this.notifyPurchase = false, 3000);
  }
}
