import { NgModule } from "@angular/core";
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { CartComponent } from "./cart.component";
import { CartItemComponent } from "./cart-item/cart-item.component";

const cartRoutes: Route[] = [
    { path: '', component: CartComponent },
]

@NgModule({
    declarations:[
        CartComponent,
        CartItemComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(cartRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class CartRoutingModule { }