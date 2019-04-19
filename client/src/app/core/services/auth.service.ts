import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { LoginModel } from "../models/login.model";

@Injectable({
    providedIn:"root"
})
export class AuthService {
    private readonly BASE_URL = `http://localhost:5000/auth/`;

    constructor(
        private http: HttpClient,
        private tostr: ToastrService,
        private router: Router
    ) {
             
    }

    getEmail(){
        return localStorage.getItem('email');
    }

    isAuth(){
        return !!localStorage.getItem('token');
    }

    getIsAdmin(){
        return localStorage.getItem('role')==='Admin';
    }

    logout(){
        localStorage.clear();
        this.tostr.success('You ware logged out!');
        this.router.navigate['/'];
    }

    login(body: LoginModel) {
        return this.http.post(this.BASE_URL + 'login', body);
    }
}