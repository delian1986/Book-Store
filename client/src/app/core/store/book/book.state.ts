import BookModel from "../../models/book/book.model";

export default interface BookState {
    all:BookModel[],
    details:BookModel
}