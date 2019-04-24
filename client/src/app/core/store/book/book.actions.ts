import { Action } from "@ngrx/store";
import BookModel from "../../models/book/book.model";

export const GET_ALL_BOOKS='[BOOK] GET ALL';
export const CREATE_BOOK='[BOOK] CREATE';
export const GET_DETAILS='[BOOK] DETAILS';
export const EDIT_BOOK='[BOOK] EDIT';
export const DELETE_BOOK='[BOOK] DELETE';

export class GetAllBooks implements Action{
    type:string=GET_ALL_BOOKS;
    constructor(public payload:BookModel[]){}
}

export class GetBookDetails implements Action {
    type: string = GET_DETAILS;
    constructor(public payload: BookModel) { }
  }

export class CreateBook implements Action{
    type:string=CREATE_BOOK;
    constructor(public payload){}
}

export class EditBook implements Action{
    type:string=EDIT_BOOK;
    constructor(public payload){}
}

export class DeleteBook implements Action{
    type:string=DELETE_BOOK;
    constructor(public payload){}
}



export type Types=
GetAllBooks|
CreateBook|
EditBook|
DeleteBook|
GetBookDetails
;