import { Component, OnInit } from '@angular/core';
import { Validators, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';
import { LoginModel } from 'src/app/core/models/auth/login.model';
import { Subscription } from 'rxjs';
import { AuthService } from './../../../core/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private spinner: NgxSpinnerService,

    public modalRef: MDBModalRef,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength]],
      password: [null, [Validators.required, Validators.minLength(3)]],

    })
  }

  login() {
    this.spinner.show();
    const { username, password } = this.loginForm.value;
    const loginModel = new LoginModel(username, password);
    this.authService.login(loginModel)
      .subscribe(() => {
        this.modalRef.hide();
        this.spinner.hide();
      });

  }

}
