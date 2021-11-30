import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { skip } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb/';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | any;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute, private bcService: BreadcrumbService) {
    this.bcService.set('@productDetails', ' ');
   }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')!).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails', this.product.name);
      console.log(this.product.id);
    }, error => {
      console.log(error);
    })
  }

}
