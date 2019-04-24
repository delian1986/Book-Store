import { Component, OnInit } from '@angular/core';
import { CartBookModel } from 'src/app/core/models/cart/cart.model';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { RemoveFromCart, UpdateCart } from 'src/app/core/store/cart/cart.actions';
import { CheckoutService } from 'src/app/core/services/checkout.service';
import CheckoutModel from 'src/app/core/models/checkout/checkout.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  books: CartBookModel[];
  total: number;
  private subscription$: Subscription[] = [];
  constructor(
    private store: Store<AppState>,
    private chekoutService:CheckoutService,
  ) { }

  ngOnInit() {
    this.subscription$.push(this.store.pipe(select(state => state.cart.books))
      .subscribe(books => {
        this.books = books;
      }))

    this.calculateTotal();
  }

  private calculateTotal() {
    this.total=0;
    for (const b of this.books) {
      this.total += b.price * b.quantity;
    }
  }

  removeFromCart(id: string) {
    this.store.dispatch(new RemoveFromCart(id));
    this.calculateTotal();
  }

  updateQuantity(quantityObj) {
    const {id,newQuantity } = quantityObj;

    if (!isNaN(newQuantity) && parseInt(newQuantity, 10) >= 1) {
      // debugger
      this.store.dispatch(new UpdateCart(id, newQuantity));
    } else {
      this.store.dispatch(new UpdateCart(id, 1));
    }
    
    this.calculateTotal();
  }

  checkout(){
    // let checkout=new CheckoutModel(this.books);
      this.chekoutService.checkout(this.books);
  }

  ngOnDestroy(): void {
    this.subscription$.forEach(sub => sub.unsubscribe());
  }

}
