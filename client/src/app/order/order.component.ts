import { Component, OnInit } from '@angular/core';
import { IOrder } from '../shared/models/order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orders: IOrder[] | any;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    console.log('im in order component now');
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrderForUser().subscribe(
      (orders: IOrder[] | any) => {
        this.orders = orders;
        console.log(orders);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
