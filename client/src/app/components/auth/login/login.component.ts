import { Component, OnInit } from '@angular/core';
import { Validators, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(
    public modalRef: MDBModalRef,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [ Validators.required] ]
    })
  }

  login() {
    const { email, password } = this.loginForm.value;
    console.log(email,password);
  }

}
