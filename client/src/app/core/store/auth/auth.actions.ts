import { Action } from "@ngrx/store";
import IAuthModel from "../../models/authModel";


export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout'

export class Login implements Action {
    type: string = LOGIN;
    constructor(public payload: IAuthModel) { }
}

export class Logout implements Action{
    type:string=LOGOUT;
    constructor(){}
}

export type Types =
    Login |
    Logout