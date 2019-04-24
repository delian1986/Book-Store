import BookState from "./book/book.state";
import { CartState } from "./cart/cart.state";

export interface AppState {
    book: BookState,
    cart: CartState
}
