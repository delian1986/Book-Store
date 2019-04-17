import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);
  constructor(
    public modalRef: MDBModalRef
  ) { }

  ngOnInit() {
  }

}
