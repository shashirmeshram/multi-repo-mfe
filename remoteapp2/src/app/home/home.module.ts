import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { createCustomElement } from '@angular/elements';
//import { SharedLibModule } from 'shared-lib';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {

  // constructor(private injector: Injector) {}

  // ngDoBootstrap() {
  //   const ce = createCustomElement(HomeComponent, { injector: this.injector });
  //   customElements.define('angular1-element', ce);
  // }
}
