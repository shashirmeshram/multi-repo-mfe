import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation'; //Dynamic loading the mfe import loadRemoteModule

const MFE_APP1_URL = 'http://localhost:5001/remoteEntry.js';
const MFE_APP2_URL = 'http://localhost:5002/remoteEntry.js';

const routes: Routes = [
 
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

