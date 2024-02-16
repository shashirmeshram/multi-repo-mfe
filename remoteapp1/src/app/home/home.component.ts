import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { BasketService, Product } from 'shared-lib';

interface BasketProduct {
  product: Product;
  quantity: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  message!: '';

  // public items: BasketProduct[] = [];
  // public totalItems = 0;

  // constructor(private basketService: BasketService) {}

  // ngOnInit(): void {
  //   // fromEvent(window, 'event').subscribe((event: any) => {
  //   //   this.message = event.detail;
  //   //   console.log('fromEvent message:' + this.message);
  //   // });

  //   const basketItems = this.basketService.getBasketItems();
  //   console.log('basketItems', basketItems);
  //   this.items = basketItems.reduce((acc, cur) => {
  //     const idx = acc.findIndex((p) => p.product.id === cur.id);
  //     idx !== -1
  //       ? acc[idx].quantity++
  //       : acc.push({ product: cur, quantity: 1 });
  //     return acc;
  //   }, [] as BasketProduct[]);

  //   this.totalItems = basketItems.length;
  // }

  public items: BasketProduct[] = [];
  public totalItems = 0;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {

    
    const basketItems = this.basketService.getBasketItems();
    console.log('basketItems', basketItems);
    this.items = basketItems.reduce((acc, cur) => {
      const idx = acc.findIndex((p) => p.product.id === cur.id);
      idx !== -1
        ? acc[idx].quantity++
        : acc.push({ product: cur, quantity: 1 });
      return acc;
    }, [] as BasketProduct[]);

    this.totalItems = basketItems.length;
  }
}
