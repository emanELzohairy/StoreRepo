import { registerLocaleData } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() productItem:any;
products:Product[]=[];

id: string='';
  constructor(private productService:ProductService) {
   }

  ngOnInit(): void {
  }
  countplus(product:Product){
    debugger
    this.productService.addToCart(product);
    alert("data added to cart");
  
  }
  onCountChange(e :any)
  {
    this.productItem.count=e;

    this.productService.updatePriceWithCount(this.productItem);
  }
  reCalculate(){
    debugger
    this.productService.computeCartTotals()
  }
  countminus(product:Product){
    debugger
    this.productService.removeFromCart(product);
  }


}
