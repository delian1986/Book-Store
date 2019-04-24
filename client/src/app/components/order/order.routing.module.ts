import { NgModule } from "@angular/core";
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { OrderComponent } from "./order.component";
import { DetailsComponent } from './details/details.component';

const orderRoutes: Route[] = [
    { path: '', component: OrderComponent },
    { path: 'details/:id', component: DetailsComponent },
]

@NgModule({
    declarations:[
        OrderComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(orderRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class OrderRoutingModule { }