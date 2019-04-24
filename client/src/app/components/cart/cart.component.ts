import { Component, OnInit } from '@angular/core';
import { CartBookModel } from 'src/app/core/models/cart/cart.model';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  books: CartBookModel[];
  total: number=0;
  private subscription$: Subscription[]=[];
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.subscription$.push(this.store.pipe(select(state=>state.cart.books))
      .subscribe(books=>{
          this.books=books;
      }))
    
      for (const b of this.books) {
        this.total+=b.price*b.quantity;
      }
  }

  ngOnDestroy(): void {
    this.subscription$.forEach(sub=>sub.unsubscribe());
  }

}
