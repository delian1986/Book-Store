import { NgModule } from "@angular/core";
import { Route, RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { BookListComponent } from "./book-list/book-list.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

const bookRoutes: Route[] = [
    { path: 'all', component: BookListComponent },
]

@NgModule({
    declarations:[
        BookListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(bookRoutes),
        NgxPaginationModule,
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})
export class BookRoutingModule { }