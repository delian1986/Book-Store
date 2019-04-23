import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import BookModel from "../models/book/book.model";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { GetLastBooks, GetAllBooks, CreateBook, } from "../store/book/book.actions";
import CreateBookModel from "../models/book/create-book";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: "root"
})
export class BookService {
    private readonly BASE_URL = `http://localhost:5000/book/`;

    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        private router: Router,
        private toastr:ToastrService

    ) { }

    getLastBooks() {
        this.http.get<BookModel[]>(this.BASE_URL + 'last')
            .subscribe(books => {
                this.store.dispatch(new GetLastBooks(books));
            })
    }

    getAllBooks() {
        this.http.get<BookModel[]>(this.BASE_URL + 'all')
            .subscribe(books => {
                this.store.dispatch(new GetAllBooks(books));
            })
    }

    createBook(book: CreateBookModel) {
        this.http
            .post(this.BASE_URL + 'create', book)
            .subscribe((book) => {
                this.store.dispatch(new CreateBook(book))
                this.router.navigate(['/books'])
                this.toastr.success('Product added successfully.')
            })
    }
}