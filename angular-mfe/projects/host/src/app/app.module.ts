import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebElementComponent } from './web-component/web-element.component';
import { SharedLibModule } from 'shared-lib';
import { MaterialeModule } from '../material.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'angular-auth-oidc-client';
import { HomeComponent } from './home/home.component';
import { ProtectedComponent } from './protected/protected.component';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProtectedComponent,
    WebElementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedLibModule,
    MaterialeModule,
  
    ModuleFederationToolsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
