import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule,MatSlideToggleModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
