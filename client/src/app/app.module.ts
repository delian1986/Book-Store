import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';
import { AppRoutingModule } from './app-routing';
import { HomeModule } from './components/home/home.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './core/store/app.reducers';
import { NgxSpinnerModule } from 'ngx-spinner';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from './components/admin/book/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DeleteComponent,
  ],
  imports: [
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({}),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgxSpinnerModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
  ],
  entryComponents: [ 
    LoginComponent,
    RegisterComponent,
    DeleteComponent
   ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
