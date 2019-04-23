import { Action } from "@ngrx/store";
import BookModel from "../../models/book/book.model";

export const GET_LAST_BOOKS='[BOOK] GET LAST';

export class GetLastBooks implements Action{
    type:string=GET_LAST_BOOKS;
    constructor(public payload:BookModel[]){}

}

export type Types=
GetLastBooks
;