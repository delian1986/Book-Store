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
import { appReducers } from './core/store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    ToastrModule.forRoot()
  ],
  entryComponents: [ 
    LoginComponent,
    RegisterComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
