import { NgModule } from "@angular/core";
import { Route, RouterModule } from '@angular/router';
import { CreateComponent } from "./book/create/create.component";
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { ReactiveFormsModule } from "@angular/forms";

const adminRoutes: Route[] = [
    { path: 'create', component: CreateComponent },
]

@NgModule({
    declarations:[
        CreateComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes),
        ReactiveFormsModule,
        // MDBBootstrapModule.forRoot(),
        
        
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }