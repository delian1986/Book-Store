import { Component, OnInit, Input, ViewChild, DoCheck } from '@angular/core';
import BookModel from 'src/app/core/models/book/book.model';
import { animations } from './card-animation';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, Route } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { DeleteComponent } from '../../admin/book/delete/delete.component';
import { CartBookModel } from 'src/app/core/models/cart/cart.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { AddToCart } from 'src/app/core/store/cart/cart.actions';

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
    private modalService: NgbModal,
    private router:Router,
    private store: Store<AppState>,
  ) {
    this.changeText = false;

  }
  
  ngDoCheck() {
    this.isAdmin=this.authService.getIsAdmin();
  }

  addToCart(){
    if (!this.authService.isAuth()) {
      this.router.navigate(['/'])
      return
    }

    const bookToAdd = new CartBookModel(
      this.book._id,
      this.book.title,
      this.book.image,
      this.book.price,
      1);


    this.store.dispatch(new AddToCart(bookToAdd))
    this.router.navigate(['/cart'])
  
  }

  deleteBook(){
    const deleteRef = this.modalService.open(DeleteComponent);
    deleteRef.componentInstance.book = this.book;
    deleteRef.result.then((result) => {
    }).catch((error) => {
    })
  }

}
