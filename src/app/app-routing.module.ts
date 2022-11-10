import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderManagementComponent } from './admin/order-management/order-management.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';
import { ProductCatalogComponent } from './customer/product-catalog/product-catalog.component';
import { ProductDetailsComponent } from './customer/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductCatalogComponent},
  { path: 'product-details', component: ProductDetailsComponent},
  // { path: 'admin/order-management', component: OrderManagementComponent},
  // { path: 'admin/product-management', component: ProductManagementComponent},
  { 
    path:  'admin',
    children: [
      { path: 'order-management', component: OrderManagementComponent},
      { path: 'product-management', component: ProductManagementComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
