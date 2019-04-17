import { AuthState } from "./auth.state";
import { LOGOUT, LOGIN } from "./auth.actions";


const initialState: AuthState = {
    token: '',
    email: '',
    isAdmin: false,
    isAuthenticated: false
}

export function authReducer(state:AuthState=initialState,action){
    switch (action.type) {
        case LOGIN:
          return action.payload
        case LOGOUT:
          return initialState
        default:
          return state
      }
}