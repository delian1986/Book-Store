import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/core/services/checkout.service';
import { OrderModel } from 'src/app/core/models/checkout/order.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: OrderModel;
  subscription$: Subscription[] = [];
  constructor(
    private orderService: CheckoutService
  ) { }

  ngOnInit() {
    this.subscription$.push(this.orderService.getMyOrders()
      .subscribe((orders) => {
        this.orders = orders
      }))
  }
  ngOnDestroy(): void {
    this.subscription$.forEach(sub => sub.unsubscribe());
  }


}
