import { Component, OnInit, Output } from '@angular/core';
import BookModel from 'src/app/core/models/book/book.model';
import { BookService } from 'src/app/core/services/book.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Output()
  public books: BookModel[];

  constructor(
    private spinner: NgxSpinnerService,
    private bookService: BookService,
    private store: Store<AppState>
  ) {
    
  }
  slides: any = [[]];
  
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.spinner.show();
    this.bookService.getAllBooks();
    this.store.select<BookModel[]>(state => state.book.all)
      .subscribe((books) => {
        this.books = books.sort((a, b) => new Date(b.added).getTime() - new Date(a.added).getTime())
        .slice(0, 6);
        this.slides = this.chunk(this.books,3);
        this.spinner.hide();
      })
  }

}
