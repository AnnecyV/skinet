import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket } from 'src/app/shared/models/basket';
import { BasketService } from '../../basket/basket.service';
import { ToastrService } from 'ngx-toastr';
import { CdkStepper } from '@angular/cdk/stepper/stepper';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss'],
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper | any;
  basket$: Observable<IBasket> | any;

  constructor(
    private basketService: BasketService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
  }

  createPaymentIntent(): any {
    return this.basketService.createPaymentIntent().subscribe(
      (response: any) => {
        this.appStepper.next();
      },
      (error: { message: string | any }) => {
        //adding the specification here manually lesson 264 6:54min in the video to get the explanation
        console.log(error);
      }
    );
  }
}
