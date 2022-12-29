import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { checkout, Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//    myform = new FormGroup({
//   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
//   address:new FormControl('', [Validators.required, Validators.minLength(3)]),
//   CreditCardNum:new FormControl('', [Validators.required, Validators.maxLength(15)])
// });
// checkoutData:checkout
  products:Product[]=[];
  model = new checkout( 1, '', '');
  submitted = false;
name:string='';
total:number=0;
  onSubmit() { this.submitted = true; }
  subscription: Subscription;
  totalQuantitySubscription:Subscription=new Subscription;
    constructor(private productService:ProductService) { 
      // this.productService.getCart()
      this.subscription = this.productService.cartPeroducts$.subscribe(data => {
        this.products = data;
      });
      this.totalQuantitySubscription = this.productService.totalPrice.subscribe(price => {
        this.total = price });
      console.log(this.products);
     
    }
    checkout(data:checkout){
     
     this.productService.checkout(data);
    console.log(localStorage.getItem('checkout'));
    }
    ngOnInit(): void {
  
      this.productService.computeCartTotals();
      this.totalQuantitySubscription = this.productService.totalPrice.subscribe(price => {
        this.total = price});
        }
    
}
