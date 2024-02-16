import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'host';

  constructor(private router: Router) {}

  public ngOnInit(): void {}

  dispatchEventFromHostFn() {
    const customEvent = new CustomEvent('event', {
      detail: { data: 'Hello from Host' },
    });

    const event = new CustomEvent('event', { detail: 'hello from host' });
    dispatchEvent(event);
  }

  gotoWebComponent() {
    this.router.navigateByUrl('/web-component');
  }
}
