import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegisterModel } from 'src/app/core/models/auth/registerModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    public modalRef: MDBModalRef,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
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
    const { username} = this.registerForm.value;
    const {password,repeatPassword }=this.registerForm.value.passwords;
    const registerModel=new RegisterModel(username,password,repeatPassword);
   this.authService.register(registerModel)
    .subscribe(()=>{
      this.modalRef.hide();
    });
  }

}
