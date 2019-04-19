import { Component, DoCheck } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { RegisterComponent } from '../../auth/register/register.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})

export class JumbotronComponent implements DoCheck {
  modalRef: MDBModalRef;
  isAnonymous:boolean=true;
  
  constructor(
    private modalService: MDBModalService,
    private authService:AuthService
  ) { }

  ngDoCheck(){
    this.isAnonymous=!this.authService.isAuth();
  }

   loginModal(){
    this.modalRef = this.modalService.show(LoginComponent);
  }

  registerModal(){
    this.modalRef = this.modalService.show(RegisterComponent);
  }

}
