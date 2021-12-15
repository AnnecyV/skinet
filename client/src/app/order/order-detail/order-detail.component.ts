import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../../shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb/';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  order: IOrder[] | any;

  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private orderService: OrderService
  ) {
    this.breadcrumbService.set('@OrderDetail', '');
  }

  ngOnInit() {
    this.orderService
      .getOrderDetail((Number)(this.route.snapshot.paramMap.get('id')))
      .subscribe(
        (order: IOrder[] | any) => {
          this.order = order;
          this.breadcrumbService.set(
            '@OrderDetail',
            `Order# ${order.id} - ${order.status}`
          );
        },
          error => {
          console.log(error);
        }
      );
  }
}
