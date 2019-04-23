import { Action } from "@ngrx/store";
import BookModel from "../../models/book/book.model";

export const GET_LAST_BOOKS='[BOOK] GET LAST';
export const GET_ALL_BOOKS='[BOOK] GET ALL';

export class GetLastBooks implements Action{
    type:string=GET_LAST_BOOKS;
    constructor(public payload:BookModel[]){}
}

export class GetAllBooks implements Action{
    type:string=GET_ALL_BOOKS;
    constructor(public payload:BookModel[]){}
}



export type Types=
GetLastBooks|
GetAllBooks
;