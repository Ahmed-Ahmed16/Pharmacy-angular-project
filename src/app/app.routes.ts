// app.routes.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { creatcomponent } from './creat account/creat.component';
import { productscomponent } from './products/products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'creat',
    pathMatch: 'full'
  },
  {
    path: 'creat',
    component: creatcomponent
  },
  {
    path: 'products',
    component: productscomponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }