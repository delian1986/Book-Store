import { Component, OnInit } from '@angular/core';
import { Validators, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';
import { LoginModel } from 'src/app/core/models/login.model';
import { Subscription } from 'rxjs';
import {AuthService} from './../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private subscription$: Subscription

  loginForm:FormGroup;
  constructor(
    public modalRef: MDBModalRef,
    private fb: FormBuilder,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [ Validators.required] ]
    })
  }

  login() {
    const { email, password } = this.loginForm.value;
    const loginModel=new LoginModel(email,password);
    this.subscription$ = this.authService.login(loginModel)
    .subscribe(()=>{
      this.modalRef.hide();
    });

  }

}
