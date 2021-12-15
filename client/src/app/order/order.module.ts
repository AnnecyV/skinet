import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { OrderDetailComponent } from './order-detail/order-detail.component';



@NgModule({
  declarations: [
    OrderComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    OrderRoutingModule,
    BreadcrumbModule
  ],
  exports: [
    OrderComponent,
    OrderDetailComponent
  ]
  })
export class OrderModule { }
