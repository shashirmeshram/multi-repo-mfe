import { Component } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

import { ProductsService } from 'shared-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: any;
  subscription: Subscription | undefined;

  title = 'remoteapp2';
  message!: '';
  ngOnInit(): void {
    fromEvent(window, 'event').subscribe((event: any) => {
      this.message = event.detail;
      console.log('fromEvent message:' + this.message);
    });
  }

  constructor( private productsService: ProductsService) {
    //this.data = this.dataSignalService.getData();
   // console.log("his.data", this.data)
    //this.data = this.dataSignalService.getData();
    //console.log("dataService", dataService)
    // this.subscription = this.dataService.data$.subscribe((data: string) => {
    //   this.data = data;
    // });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
