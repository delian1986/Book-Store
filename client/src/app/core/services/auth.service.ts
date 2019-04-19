import * as jwt_decode from 'jwt-decode'
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Store, select } from '@ngrx/store'
import { AppState } from "../store/app.state";
import { Router } from "@angular/router";
import { Login } from "../store/auth/auth.actions";
import AuthModel from "../models/authModel";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from "../models/login.model";

@Injectable({
    providedIn:"root"
})
export class AuthService {
    private readonly BASE_URL = `http://localhost:5000/auth/`;

<<<<<<< HEAD
    public email: string
    public isUserAdmin: boolean
    public isUserAuthenticated: boolean
=======
    private userId: string
    private isUserAdmin: boolean
    private isUserAuthenticated: boolean
    private email: string;
>>>>>>> 127ef1e38a74da0ba2b77b9ddd0fb0e694cd7bdf

    constructor(
        private http: HttpClient,
        private tostr: ToastrService,
        private store: Store<AppState>,
        private router: Router
    ) {
        debugger
        this.store.pipe(select(state => state.auth.isAdmin))
            .subscribe(data => this.isUserAdmin = data);
        this.store.pipe(select(state => state.auth.isAuthenticated))
            .subscribe(data => this.isUserAuthenticated = data);
        this.store.pipe(select(state => state.auth.email))
            .subscribe(data => this.email = data);

        if (localStorage.getItem('token')) {
            debugger
            const authToken = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const isAdmin = !!localStorage.getItem('isAdmin');
            const email = localStorage.getItem('email');
            const authData = new AuthModel(authToken, email, userId, isAdmin, true);
            this.store.dispatch(new Login(authData));
        }
    }

    login(body: LoginModel) {
        return this.http.post(this.BASE_URL + 'login', body);
    }
}