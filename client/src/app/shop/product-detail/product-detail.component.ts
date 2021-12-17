import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { skip } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb/';
import { ShopService } from '../shop.service';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | any;
  quantity = 1;

  constructor(
    private shopService: ShopService,
    private activateRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private basketService: BasketService
  ) {
    this.bcService.set('@productDetails', ' ');
  }

  ngOnInit() {
    this.loadProduct();
  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  loadProduct() {
    this.shopService
      .getProduct(+this.activateRoute.snapshot.paramMap.get('id')!)
      .subscribe((product: any) => {
          this.product = product;
          this.bcService.set('@productDetails', this.product.name);
          console.log(this.product.id);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
