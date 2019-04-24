import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/core/services/book.service';
import BookModel from 'src/app/core/models/book/book.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  // faWindowClose = faWindowClose

  @Input() private book: BookModel
  constructor(
    protected activeModal: NgbActiveModal,
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  delete(){
    this.bookService.deleteBook(this.book, this.activeModal)
  }

}