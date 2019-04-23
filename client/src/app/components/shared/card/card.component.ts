import { Component, OnInit, Input, ViewChild } from '@angular/core';
import BookModel from 'src/app/core/models/book/book.model';
import { animations } from './card-animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations:animations
})
export class CardComponent implements OnInit {
  @Input()
  book:BookModel;

  public changeText: boolean;
  constructor() {
    this.changeText = false;
  }
  
  ngOnInit() {
  }

}
