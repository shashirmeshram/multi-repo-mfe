import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message!: '';

  constructor() {}

  ngOnInit(): void {
    fromEvent(window, 'event').subscribe((event: any) => {
      //console.log('!!fromEvent testEventFromHost', event);
      this.message = event.detail;
      console.log('fromEvent message:' + this.message);
    });

    // PubSub.subscribe('test', (_message, data) => {
    //   this.message = data;
    //   console.log('this.message', this.message);
      
    // });
  }
}
