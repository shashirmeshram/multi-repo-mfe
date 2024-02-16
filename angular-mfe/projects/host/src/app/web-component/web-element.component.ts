import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-element',
  templateUrl: './web-element.component.html',
 styleUrls: ['./web-element.component.scss'],
})
export class WebElementComponent implements OnInit {
  items: WebComponentWrapperOptions[] = [
    {
      remoteEntry: 'http://localhost:5001/remoteEntry.js',
      remoteName: 'remoteapp1',
      exposedModule: './web-components',
      elementName: 'remoteapp1-element',
    },

    {
      remoteEntry: 'http://localhost:5002/remoteEntry.js',
      remoteName: 'remoteapp2',
      exposedModule: './web-components',
      elementName: 'remoteapp2-element',
    },

   
  ];

  constructor() {}

  ngOnInit(): void {}
}
