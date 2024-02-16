import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'; //Dynamic loading the mfe import loadRemoteModule
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProtectedComponent } from './protected/protected.component';
import { autoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { WebElementComponent } from './web-component/web-element.component';
import { ErrorComponent } from './error/error.component';

const MFE_APP1_URL = 'http://localhost:5001/remoteEntry.js';
const MFE_APP2_URL = 'http://localhost:5002/remoteEntry.js';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },

  // {
  //   path: 'app1',
  //   loadChildren: () =>
  //     import('remoteapp1/homeModule').then((module) => module.HomeModule),
  // },
  // {
  //   path: 'app2',
  //   loadChildren: () =>
  //     import('remoteapp2/homeModule').then((module) => module.HomeModule),
  // },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [autoLoginPartialRoutesGuard],
  },

  {
    path: 'web-component',
    component: WebElementComponent,
  },
  
  //Dynamic Module Federation
  {
    path: 'app1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: MFE_APP1_URL,
        exposedModule: './homeModule',
      }).then((m) => m.HomeModule),
  },
  {
    path: 'app2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: MFE_APP2_URL,
        exposedModule: './homeModule',
      }).then((m) => m.HomeModule),
  },

  // Loading multiple mfe at once
  {
    matcher: startsWith('angular1'),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: MFE_APP1_URL,
      exposedModule: './web-components',

      elementName: 'remoteapp1-element',
    } as WebComponentWrapperOptions,
  },

  {
    matcher: startsWith('angular2'),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: MFE_APP2_URL,
      exposedModule: './web-components',

      elementName: 'remoteapp2-element',
    } as WebComponentWrapperOptions,
  },



  {
    path: '**',
    component: ErrorComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
