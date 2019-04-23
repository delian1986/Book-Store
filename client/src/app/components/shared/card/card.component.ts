import { Component, OnInit, Input } from '@angular/core';
import BookModel from 'src/app/core/models/book/book.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  book:BookModel;
  constructor() {
  }
  
  ngOnInit() {
  }

}
