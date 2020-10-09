import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormCustomerComponent } from './form-customer/form-customer.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'form-customer', component: FormCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
