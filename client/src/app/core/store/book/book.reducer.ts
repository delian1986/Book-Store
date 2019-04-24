import BookState from "./book.state";
import * as BookActions from './book.actions';

const initialState: BookState = {
    all: []
}

function getAllBooks(state, action) {
    return {
        ...state,
        all: action
    }
}

function createBook(state, action) {
    return {
        ...state,
        all: [...state.all, action],
    }
}

function editBook(state, action) {
    return {
        ...state,
        all: [...state.all.filter(p => p._id !== action._id), action]
    }
}

function deleteBook(state, action) {
    debugger
    return {
        ...state,
        all: [...state.all.filter(b => b._id !== action), action]
    }
}


export function bookReducer(
    state: BookState = initialState,
    action: BookActions.Types
) {
    switch (action.type) {
        case BookActions.GET_ALL_BOOKS:
            return getAllBooks(state, action.payload);

        case BookActions.CREATE_BOOK:
            return createBook(state, action.payload);

        case BookActions.EDIT_BOOK:
            return editBook(state, action.payload);

        case BookActions.DELETE_BOOK:
            return deleteBook(state, action.payload);
        default:
            return initialState;
    }
}