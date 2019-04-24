import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import BookModel from "../models/book/book.model";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { GetAllBooks, CreateBook, EditBook, DeleteBook, } from "../store/book/book.actions";
import CreateBookModel from "../models/book/create-book";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
    providedIn: "root"
})
export class BookService {
    private readonly BASE_URL = `http://localhost:5000/book/`;

    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        private router: Router,
        private toastr:ToastrService,
        private spinner:NgxSpinnerService

    ) { }

   
    getAllBooks() {
        this.http.get<BookModel[]>(this.BASE_URL + 'all')
            .subscribe(books => {
                this.store.dispatch(new GetAllBooks(books));
            })
    }

    createBook(book: CreateBookModel) {
        this.spinner.show();
        this.http
            .post(this.BASE_URL + 'create', book)
            .subscribe((book) => {
                this.store.dispatch(new CreateBook(book))
                this.spinner.hide();
                this.router.navigate(['/book/all'])
                this.toastr.success('Product added successfully.')
            })
    }

    editBook(bookModel:BookModel){
        this.spinner.show();
        this.http
      .post(this.BASE_URL+`edit/${bookModel._id}`,bookModel)
      .subscribe((res) => {
        this.store.dispatch(new EditBook(res))
        this.spinner.hide();
        this.router.navigate(['/book/all']);
      })
    }

    deleteBook(id: string, activeModal){
        this.spinner.show();
        this.http
        .delete(this.BASE_URL+`delete/${id}`)
        .subscribe(() => {
          this.store.dispatch(new DeleteBook(id));
          this.spinner.hide();
          activeModal.close();
          this.router.navigate(['/book/all']);
        })
    }
}