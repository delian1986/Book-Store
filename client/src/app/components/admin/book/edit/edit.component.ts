import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';
import BookModel from 'src/app/core/models/book/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  _id: string
  book: BookModel
  editBookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookService,
    private store: Store<AppState>,
    private router: Router,
    private toastr: ToastrService
  ) {
    this._id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.bookService.getAllBooks();
    this.store
      .pipe(select(state => state.book.all))
      .subscribe(books => {
        this.book = books.find(b => b._id === this._id);
      });

    this.editBookForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      author: [null, [Validators.required, Validators.minLength(3)]],
      image: [null, [Validators.required, Validators.pattern('http|https')]],

    })

    this.partialUpdate();
  }

  partialUpdate() {
    this.editBookForm.patchValue({
      title: this.book.title,
      description: this.book.description,
      author: this.book.author,
      image: this.book.image
    })
  }

  edit() {
    const book = Object.assign({}, this.book, this.editBookForm.value);
    this.bookService.editBook(book);
    this.toastr.success('Book Edited!');
  }

}
