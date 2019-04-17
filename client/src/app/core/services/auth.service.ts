import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Store, select } from '@ngrx/store'
import { AppState } from "../store/app.state";
import { Router } from "@angular/router";
import { Login } from "../store/auth/auth.actions";
import AuthModel from "../models/authModel";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from "../models/login.model";

@Injectable()
export class AuthService {
    private readonly BASE_URL = `https://localhost:5000/auth/`;

    private username: string
    private isUserAdmin: boolean
    private isUserAuthenticated: boolean

    constructor(
        private http: HttpClient,
        private tostr: ToastrService,
        private store: Store<AppState>,
        private router: Router
    ) {
        this.store.pipe(select(state => state.auth.isAdmin))
            .subscribe(data => this.isUserAdmin = data);
        this.store.pipe(select(state => state.auth.isAuthenticated))
            .subscribe(data => this.isUserAuthenticated = data);
        this.store.pipe(select(state => state.auth.email))
            .subscribe(data => this.username = data);

        if (localStorage.getItem('authtoken')) {
            const authtoken = localStorage.getItem('authtoken');
            const email = localStorage.getItem('email');
            const isAdmin = localStorage.getItem('isAdmin') === 'Admin';
            const userId = localStorage.getItem('userId');
            const authData = new AuthModel(authtoken, email, userId, isAdmin, true);
            this.store.dispatch(new Login(authData))
        }
    }

    login(body:LoginModel){
        return this.http.post(this.BASE_URL+'login',body );
    }



}
