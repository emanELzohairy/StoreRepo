import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  subscription: Subscription;
    constructor(private productService:ProductService ,private route: ActivatedRoute) { 
      this.productService.FetchProducts();
      this.subscription = this.productService.products$.subscribe(data => {
        this.products = data;
      });
    }
  
    ngOnInit() {
      // this.getAllProducts();
      
    }
    // getAllProducts(){
    //   debugger
    // this.productService.getAllProducts().subscribe(
    //   data => {
    //     this.products = data;
    //   }
    // );
    // }
  
  }


