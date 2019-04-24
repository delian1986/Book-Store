import { Component, OnInit } from '@angular/core';
import BookModel from 'src/app/core/models/book/book.model';
import { BookService } from 'src/app/core/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartBookModel } from 'src/app/core/models/cart/cart.model';
import { AddToCart } from 'src/app/core/store/cart/cart.actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  bookId: string;
  book: BookModel;
  private subscribe$: Subscription[] = [];

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private spinner: NgxSpinnerService,
    private authService:AuthService,
    private router:Router
  ) {
    this.bookId = this.route.snapshot.params['id'];

  }

  ngOnInit() {
    this.spinner.show;
    this.bookService.getAllBooks();

    this.subscribe$.push(this.store
      .pipe(select(state => state.book.all))
      .subscribe(books => {
        this.book = books.find(b => b._id === this.bookId);
      }));
  }

  addToCart() { 
    if (!this.authService.isAuth()) {
      this.router.navigate(['/'])
      return
    }

    const bookToAdd = new CartBookModel(
      this.book._id,
      this.book.title,
      this.book.image,
      this.book.price,
      1);
      // debugger


    this.store.dispatch(new AddToCart(bookToAdd))
    this.router.navigate(['/cart'])
  }

  ngOnDestroy(): void {
    this.subscribe$.forEach(sub => sub.unsubscribe());
  }
}
