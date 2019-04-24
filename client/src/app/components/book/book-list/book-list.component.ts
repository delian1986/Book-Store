import { Component, OnInit, Output, DoCheck } from '@angular/core';
import BookModel from 'src/app/core/models/book/book.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/app/core/services/book.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { animations } from './book-list-animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  animations:animations
})
export class BookListComponent implements OnInit {
  @Output()
  books:BookModel[];

  subsctibe$:Subscription[]=[];

  protected pageSize: number = 6;
  currentPage: number = 1;
  constructor(
    private spinner: NgxSpinnerService,
    private bookService: BookService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.bookService.getAllBooks();

    this.subsctibe$.push(this.store.select<BookModel[]>(state => state.book.all)
      .subscribe((books) => {
        this.books = books;
        this.spinner.hide();
      }))
  }

  changePage (page) {
    this.currentPage = page
  }

  ngOnDestroy(): void {
    this.subsctibe$.forEach(sub=>sub.unsubscribe());
  }

}
