import { Component, OnInit, Input, ViewChild, DoCheck } from '@angular/core';
import BookModel from 'src/app/core/models/book/book.model';
import { animations } from './card-animation';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { DeleteComponent } from '../../admin/book/delete/delete.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations:animations
})

export class CardComponent implements DoCheck {
  @Input()
  book:BookModel;

  isAdmin:boolean=false;
  route:Router

  public changeText: boolean;
  constructor(
    private authService:AuthService,
    private modalService: NgbModal
  ) {
    this.changeText = false;

  }
  
  ngDoCheck() {
    this.isAdmin=this.authService.getIsAdmin();
  }

  addToCart(){
    
  }

  deleteBook(){
    const deleteRef = this.modalService.open(DeleteComponent);
    deleteRef.componentInstance.book = this.book;
    deleteRef.result.then((result) => {
    }).catch((error) => {
    })
  }

}
