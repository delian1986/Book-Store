import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/core/models/checkout/order.model';
import { CheckoutService } from 'src/app/core/services/checkout.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  order:OrderModel
  id:string
  subscription$:Subscription[]=[];

  constructor(
    private orderService:CheckoutService,
    private route:ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.subscription$.push(this.orderService.getOrderById(this.id)
      .subscribe((order)=>{
        this.order=order
      }))
  }

  ngOnDestroy(): void {
    this.subscription$.forEach(sub => sub.unsubscribe());
  }



}
