import { Component, OnInit } from '@angular/core';
import BookModel from 'src/app/core/models/book/book.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

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
  ) { }

  ngOnInit() {
    this.createBookForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength]],
      password: [null, [Validators.required, Validators.minLength(3)]],

    })
  }

  create() {
    this.spinner.show();
    const { username, password } = this.createBookForm.value;
    const bookModel = new BookModel(username, password);
    
        this.spinner.hide();
      });

  }
}
