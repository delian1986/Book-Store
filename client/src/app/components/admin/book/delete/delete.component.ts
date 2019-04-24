import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/core/services/book.service';
import BookModel from 'src/app/core/models/book/book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() private book: BookModel
  constructor(
    protected activeModal: NgbActiveModal,
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  delete(){
    this.bookService.deleteBook(this.book, this.activeModal);
  }

}
