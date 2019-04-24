import { bookReducer } from "./book/book.reducer";
import { cartReducer } from "./cart/cart.reducers";

export const appReducers={
    book:bookReducer,
    cart:cartReducer
}