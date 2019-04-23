import { Component, OnInit, Output } from '@angular/core';
import BookModel from 'src/app/core/models/book/book.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/app/core/services/book.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Output()
  books:BookModel[];
  constructor(
    private spinner: NgxSpinnerService,
    private bookService: BookService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.bookService.getAllBooks();
    this.store.select<BookModel[]>(state => state.book.all)
      .subscribe((books) => {
        this.books = books;
        this.spinner.hide();
      })
  }

}
