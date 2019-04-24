import { NgModule } from "@angular/core";
import { Route, RouterModule } from '@angular/router';
import { CreateComponent } from "./book/create/create.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { EditComponent } from './book/edit/edit.component';
import { DeleteComponent } from './book/delete/delete.component';

const adminRoutes: Route[] = [
    { path: 'create', component: CreateComponent },
    { path: 'edit/:id', component: EditComponent },
]

@NgModule({
    declarations:[
        CreateComponent,
        EditComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes),
        ReactiveFormsModule,
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }