import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor (
      private toastr: ToastrService,
      ) { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next
        .handle(req)
        .pipe(catchError((err: HttpErrorResponse) => {
          switch (err.status) {
            case 400:
            case 401:
              if (err.error.errors) {
                const message = Object.keys(err.error.errors)
                  .map(e => err.error.errors[e])
                  .join('\n')
                this.toastr.error(message, 'Warning!')
              } else {
                this.toastr.error(err.error.message, 'Warning!')
              }
              break
          }
  
          return throwError(err)
        }))
    }
  }