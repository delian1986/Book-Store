import { Injectable } from "@angular/core";
import CheckoutModel from "../models/checkout/checkout.model";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { OrderModel } from "../models/checkout/order.model";
import { ClearCart } from "../store/cart/cart.actions";

@Injectable({
    providedIn:'root'
})
export class CheckoutService{
    private BASE_URL='http://localhost:5000/auth/checkout/';
    private username:string;

    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        private router: Router,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private authService:AuthService,


    ) { 
        this.username=this.authService.getUsername();
    }
    
    checkout(books:CheckoutModel){
        this.http
            .post(this.BASE_URL + this.username, books)
            .subscribe((orders) => {
                this.toastr.success('Your order added successfully.');
                this.router.navigate(['/order']);
                this.store.dispatch(new ClearCart());
            })
    }   

    getMyOrders(){
        return this.http
            .get<OrderModel>(this.BASE_URL + this.username)
            
    }

    getOrderById(id){
        return this.http
            .get<OrderModel>(this.BASE_URL + 'order/'+id)
    }
    

    
}