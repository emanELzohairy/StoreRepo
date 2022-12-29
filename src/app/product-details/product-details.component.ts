import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnDestroy {
  routerSubscription: Subscription;
  todoSubscription: Subscription = new Subscription;
  product?: Product;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.routerSubscription = this.route.params.subscribe(params => {
      const id = Number(params['id']);

      this.todoSubscription = this.productService.fetchProduct(id).subscribe(todo => {
        if (!todo) {
          this.router.navigate(['/404']);
          return;
        }
        this.product = todo;
      });
    });
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.todoSubscription.unsubscribe();
  }
  // details(product:Product){
  //   debugger
  //   this.productDetails.id=product.id;
  //   this.productDetails.name=product.name;
  //   this.productDetails.price=product.price;
  //   this.productDetails.description=product.description;
  //   this.productDetails.count=product.count;

  // }

}
