import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import CreateBookModel from 'src/app/core/models/book/create-book';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  createBookForm: FormGroup;
  constructor(
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private bookService:BookService
  ) { }

  ngOnInit() {
    this.createBookForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      author: [null, [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(0)]],
      image: [null, [Validators.required, Validators.pattern('http|https')]],

    })
  }

  create() {
    this.spinner.show();
    const { title,description,author,image,price } = this.createBookForm.value;
    const newBook = new CreateBookModel(title,description,author,image,price);
    this.bookService.createBook(newBook);
    this.spinner.hide();

  }
}
