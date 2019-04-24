import { CartState } from "./cart.state";
import { ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART, } from "./cart.actions";
import { CartBookModel } from "../../models/cart/cart.model";

const initialState: CartState = {
    books: []
};

function addToCart(state: CartState, book: CartBookModel) {
    if (state.books.find(b => b._id === book._id)) {
        const newProducts = state.books.slice();
        const cartProduct = newProducts.find(b => b._id === book._id);
        cartProduct.quantity =+1;
        return {
            ...state,
            books: newProducts,
        }

    }

    return {
        ...state,
        books: [...state.books, book],
    }
}

function updateCart(state: CartState, id: string, quantity: number) {
    // debugger
    const newProducts = state.books.slice();
    const cartProduct = newProducts.find(b => b._id === id)
    cartProduct.quantity = quantity
   
    return {
        ...state,
        books: newProducts,
    }
}

function removeFromCart(state: CartState, id: string) {
    return {
        ...state,
        books: [...state.books.filter(b => b._id !== id)]
    }

}


export function cartReducer(state: CartState = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCart(state, action.payload)

        case UPDATE_CART:
            return updateCart(state, action.id, action.quantity)

        case REMOVE_FROM_CART:
            return removeFromCart(state, action.id)

       
        default:
            return state
    }
}