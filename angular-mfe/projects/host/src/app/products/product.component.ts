import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'shared-lib';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
  standalone: true,
  imports: [NgClass, NgIf],
})
export class ProductComponent {
  public notifyPurchase = false;
  @Input() public product!: Product;
  @Output() public purchase: EventEmitter<number> = new EventEmitter<number>();

  public purchaseProduct(): void {
    this.notifyPurchase = true;
    this.purchase.emit(this.product.id);
    setTimeout(() => (this.notifyPurchase = false), 3000);
  }
}
