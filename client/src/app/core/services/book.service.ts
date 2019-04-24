import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import BookModel from "../models/book/book.model";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import {
    GetAllBooks,
    CreateBook,
    EditBook,
    DeleteBook,
    GetBookDetails,
} from "../store/book/book.actions";
import CreateBookModel from "../models/book/create-book";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class BookService {
    private readonly BASE_URL = `http://localhost:5000/book/`;

    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        private router: Router,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService

    ) { }


    getAllBooks() {
        this.http.get<BookModel[]>(this.BASE_URL + 'all')
            .subscribe(books => {
                this.store.dispatch(new GetAllBooks(books));
            })
    }

    getById(id: string) {
        return this.getByIdInternal(id, book => {
            this.store.dispatch(new GetBookDetails(book));
            debugger
        });
    }

    private getByIdInternal(id: string, callback) {
        return this.http
            .get<BookModel>(this.BASE_URL + `details/${id}`)
            .pipe(map((book: BookModel) => {
                callback(book);
            }));
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

    editBook(bookModel: BookModel) {
        this.spinner.show();
        this.http
            .post(this.BASE_URL + `edit/${bookModel._id}`, bookModel)
            .subscribe((res) => {
                this.store.dispatch(new EditBook(res))
                this.spinner.hide();
                this.router.navigate(['/book/all']);
            })
    }

    deleteBook(book: BookModel, activeModal) {
        this.spinner.show();
        this.http
            .delete(this.BASE_URL + `delete/${book._id}`)
            .subscribe(() => {
                this.store.dispatch(new DeleteBook(book));
                this.spinner.hide();
                activeModal.close();
                this.router.navigate(['/book/all']);
            })
    }
}