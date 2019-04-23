import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BookModule } from './components/book/book.module';
import { appReducers } from './core/store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({}),
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BookModule,
  ],
  entryComponents: [ 
    LoginComponent,
    RegisterComponent
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
