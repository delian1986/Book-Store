import { NgModule } from "@angular/core";
import { Route, RouterModule } from '@angular/router';
import { CreateComponent } from "./book/create/create.component";

const adminRoutes: Route[] = [
    { path: 'create', component: CreateComponent },
]

@NgModule({
    declarations:[
        CreateComponent
    ],
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }