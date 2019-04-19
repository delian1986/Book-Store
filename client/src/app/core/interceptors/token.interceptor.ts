import * as jwt_decode from 'jwt-decode';
import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http'
import { ToastrService } from "ngx-toastr";
import { Store, select } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { tap } from 'rxjs/operators';
import AuthModel from "../models/authModel";
import { Login } from '../store/auth/auth.actions';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private token: string;

    constructor(
        private tostr: ToastrService,
        private store: Store<AppState>
    ) {
        this.store.pipe(select(state => state.auth.token))
            .subscribe(data => this.token = data);
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url.endsWith('/auth/login')) {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                }
            });
        }

        return next
            .handle(req)
            .pipe(tap((res: HttpEvent<any>) => {
                if (res instanceof HttpResponse && req.url.endsWith('auth/login')) {
                    this.saveCredentials(res.body);
                }

                if (res instanceof HttpResponse && res.body.success && req.url.endsWith('/auth/register')) {
                    this.tostr.success(res.body.message)
                }
            }))
    }

    private saveCredentials(body) {
        // this.decodeToken(body.token);
        debugger
        const authToken = body.token;
        const userId = body.userId;
        const isAdmin = body.role === 'Admin';
        const email = body.email;
        const authData = new AuthModel(authToken, email, userId, isAdmin, true);
        this.store.dispatch(new Login(authData));

        localStorage.setItem('token', authToken);
        localStorage.setItem('userId', userId);
        localStorage.setItem('isAdmin', isAdmin.toString());
        localStorage.setItem('email', email);
        debugger
        this.tostr.success(body.message);

    }

    private decodeToken(token) {
        const decoded = jwt_decode(token)
    }

}