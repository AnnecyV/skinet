import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopRoutingModule } from './shop-routing.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { OrderRoutingModule } from '../order/order-routing.module';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    BreadcrumbModule
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
