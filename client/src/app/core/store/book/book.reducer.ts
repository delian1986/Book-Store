import BookState from "./book.state";
import * as BookActions from './book.actions';

const initialState: BookState = {
    last: [],
    all:[]
}

function getLastBooks(state, action) {
    return{
        ...state,
        last:action
    }
}

function getAllBooks(state, action) {
    return{
        ...state,
        all:action
    }
}

export function bookReducer(
    state: BookState = initialState,
    action: BookActions.Types
) {
    switch (action.type) {
        case BookActions.GET_LAST_BOOKS:
            return getLastBooks(state, action.payload);

        case BookActions.GET_ALL_BOOKS:
            return getAllBooks(state, action.payload);

        default:
            return initialState;
    }
}