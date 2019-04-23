import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import BookModel from "../models/book/book.model";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { GetLastBooks } from "../store/book/book.actions";

@Injectable({
    providedIn:"root"
})
export class BookService{
    private readonly BASE_URL = `http://localhost:5000/book/`;

    constructor(
        private http: HttpClient,
        private store:Store<AppState>

    ){}

    getLastBooks(){
        this.http.get<BookModel[]>(this.BASE_URL+'last')
            .subscribe(books=>{
                this.store.dispatch(new GetLastBooks(books));
            })
    }
}