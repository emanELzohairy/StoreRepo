import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutConfirmationComponent } from './checkout-confirmation/checkout-confirmation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: '', redirectTo:'Products',pathMatch: 'full' },
  { path: 'Products', component: ProductsComponent },
 { path: 'CheckoutConfirmation', component: CheckoutConfirmationComponent },

  { path: 'products/:id', component: ProductDetailsComponent },
 { path: 'cart', component: CartComponent },
  // {
  //   path: 'checkout',
  //   component: CheckoutComponent
  
  // }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
