import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    OrderModule,
    CustomerModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
