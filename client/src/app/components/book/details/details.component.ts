import { Component, OnInit } from '@angular/core';
import BookModel from 'src/app/core/models/book/book.model';
import { BookService } from 'src/app/core/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  bookId:string;
  book:BookModel;

  constructor(
    private bookService:BookService,
    private route:ActivatedRoute,
    private store: Store<AppState>,
    private spinner:NgxSpinnerService
  ) {
    this.bookId= this.route.snapshot.params['id'];

   }

  ngOnInit() {
    this.spinner.show;
    this.bookService.getAllBooks();
    this.store
    .pipe(select(state => state.book.all))
    .subscribe(books => {
      this.book = books.find(b => b._id === this.bookId);
    });
  }

  addToCart(){}

}
