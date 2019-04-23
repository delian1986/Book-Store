import {  Router, CanLoad, Route, UrlSegment } from '@angular/router';

import { Injectable } from '@angular/core'
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { AuthService } from '../../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {

    public modalRef: MDBModalRef;
    
    constructor(
        private authService: AuthService,
        private router: Router,
        private modalService: MDBModalService, ) { }

        canLoad(route: Route, segments: UrlSegment[]) {

        if (this.authService.isAuth()) {
            return true
        }

        this.router.navigate(['/'])
        this.openLoginModal()
        return false
    }

    openLoginModal() {
        this.modalRef = this.modalService.show(LoginComponent);
    }
}