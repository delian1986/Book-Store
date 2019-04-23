import {  Router, CanLoad, Route, UrlSegment } from '@angular/router';
  import { Injectable } from '@angular/core'
  import { Observable } from 'rxjs'
import { AuthService } from '../../services/auth.service';
  
  
  @Injectable({
   providedIn: 'root'
  })
  export class AdminGuard implements CanLoad  {
  
   constructor(
     private authService: AuthService,
     private router: Router ) { }
  
   canLoad(route: Route, segments: UrlSegment[]) {
  
     if (this.authService.getIsAdmin()) {
       return true;
     }
  
     this.router.navigate([''])
     return false;
   }
  }