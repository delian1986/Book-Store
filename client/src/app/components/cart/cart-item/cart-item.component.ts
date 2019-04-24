import { Component, OnInit, Input } from '@angular/core';
import { CartBookModel } from 'src/app/core/models/cart/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()
  book:CartBookModel;

  bookTotal:number;

  constructor() {
  }
  
  ngOnInit() {
    this.bookTotal=this.book.price*this.book.quantity;
  }

}
