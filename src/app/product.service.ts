import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { checkout, Product } from './models/product';
import { BehaviorSubject, catchError, map, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];
 checkoutData:checkout={creditCard:0,name:'',address:''};
 products$ = new BehaviorSubject<Product[]>(this.products);
 cartPeroducts$= new BehaviorSubject<Product[]>(this.products); 
 totalPrice = new Subject<number>();
  productList:Product[]=[];
  constructor(private http :HttpClient) { }
  getAllProducts(): Observable<Product[]> {
    debugger;
    return this.http.get<Product[]>('assets/data.json')
      
  }
  FetchProducts() {
    const s = this.http.get<Product[]>('/assets/data.json').subscribe(todos => {
      this.productList = todos;
      this.products$.next(this.productList);

      s.unsubscribe();
    });
  }
  getProduct(id:number):any{
    return this.productList.filter(item =>item.id==id)
  }
  fetchProduct(id: number) {
    return this.products$.asObservable()
    .pipe(map(prodcts => prodcts.find(product => product.id === id)));
  }
  addToCart(product:Product){
    debugger
    // if(this.products.length){
     var productExist=this.products.find(x=>x.id==product.id);
      if(productExist){
          productExist.count=product.count;
        }
    else{
         product.count;
        this.products.push(product);
        }
        this.computeCartTotals();
   this.cartPeroducts$.next(this.products);
  }
  checkout( data:checkout ){
    debugger
  this.checkoutData.name=data.name;
  this.checkoutData.address=data.address;
  this.checkoutData.creditCard=data.creditCard;
  localStorage.setItem('checkoutData', this.checkoutData.name);
  localStorage.setItem('Address', this.checkoutData.address);

  console.log(localStorage.getItem('checkoutData'));
  // this.checkoutData.Product=data.Product;
  }
  getCart(){
    debugger
    return this.cartPeroducts$.asObservable()
  }
  removeFromCart(product:Product){
    debugger
    var productExist=this.products.find(x=>x.id==product.id);
    if(productExist!=undefined && productExist.count>2){
      product.count--;
      }
    else{
      const index = this.products.findIndex(todo => todo.id === product.id);
      this.products.splice(index, 1);
         }
        this.computeCartTotals()
        this.cartPeroducts$.next(this.products);

  }
  computeCartTotals(): any {
    debugger
    let totalPrices = 0;
    let totalQuantity = 0;

    this.products.forEach(cartItem => {
      totalPrices += Number( cartItem.count) * Number(cartItem.price);
   
    });

    // Publish the new totals
    this.totalPrice.next(totalPrices);
    
  }
  updatePriceWithCount(ProductChanged:Product)
  {
 debugger;
    const index = this.products.findIndex(Product => Product.id === ProductChanged.id);
    this.products[index].count = ProductChanged.count
 
    this.cartPeroducts$.next(this.products);
    this.computeCartTotals();

  }
  clearCart(){
    this.products=[];
    return this.products;
  }

}
