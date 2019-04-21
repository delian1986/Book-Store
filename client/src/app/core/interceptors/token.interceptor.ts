import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http'
import { ToastrService } from "ngx-toastr";
import { tap } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private token: string;

    constructor(
        private tostr: ToastrService,
    ) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url.endsWith('login')) {
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
                if (res instanceof HttpResponse && req.url.endsWith('login')) {
                    this.saveCredentials(res.body);
                }

                if (res instanceof HttpResponse && res.body && req.url.endsWith('register')) {
                    this.tostr.success(res.body.message)
                }
            }))
    }

    private saveCredentials(body) {
        const authToken = body.token;
        const userId = body.userId;
        const isAdmin = body.role === 'Admin';
        const email = body.email;

        localStorage.setItem('token', authToken);
        localStorage.setItem('userId', userId);
        localStorage.setItem('isAdmin', isAdmin.toString());
        localStorage.setItem('email', email);
        this.tostr.success(body.message);

    }


}