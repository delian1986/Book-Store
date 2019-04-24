import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartBookModel } from 'src/app/core/models/cart/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()
  book:CartBookModel;

  @Output()
  removeItem=new EventEmitter();

  @Output()
  qntity=new EventEmitter();

  bookTotal:number;

  constructor() {
  }

  remove(){
    this.removeItem.emit(this.book._id);
  }

  setQuantity(event,id){
    const newQuantity=event.target.value;
    this.qntity.emit({newQuantity,id});
    this.calculateSubTotal();
  }
  
  ngOnInit() {
    this.calculateSubTotal();
  }
  
  private calculateSubTotal(){
    this.bookTotal=this.book.price*this.book.quantity;
  }

}
