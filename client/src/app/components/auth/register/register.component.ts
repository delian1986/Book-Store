import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';
import { RegisterModel } from 'src/app/core/models/auth/registerModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  private subscription$: Subscription;

  constructor(
    public modalRef: MDBModalRef,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      passwords: this.fb.group({
        password: [null, [Validators.required, Validators.minLength(3)]],
        repeatPassword: [null, [Validators.required, Validators.minLength(3)]]
      }, { validators: this.passValidate })
    })
  }

  private passValidate(control: AbstractControl) {
    if (control.get('password').value !== control.get('repeatPassword').value) {
      return {passwordMismatch: true};
    }
    return null;
  }

  register() {
    const { email} = this.registerForm.value;
    const {password,repeatPassword }=this.registerForm.value.passwords;
    const registerModel=new RegisterModel(email,password,repeatPassword);
    this.subscription$ = this.authService.register(registerModel)
    .subscribe(()=>{
      this.modalRef.hide();
    });
  }

}
