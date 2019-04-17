import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { RegisterComponent } from '../../auth/register/register.component';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})

export class JumbotronComponent implements OnInit {
  modalRef: MDBModalRef;
  
  constructor(
    private modalService: MDBModalService
  ) { }

  ngOnInit() {
  }

  loginModal(){
    this.modalRef = this.modalService.show(LoginComponent)
  }

  registerModal(){
    this.modalRef = this.modalService.show(RegisterComponent)
  }

}
