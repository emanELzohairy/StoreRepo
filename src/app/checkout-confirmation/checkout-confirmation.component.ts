import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-confirmation',
  templateUrl: './checkout-confirmation.component.html',
  styleUrls: ['./checkout-confirmation.component.css']
})
export class CheckoutConfirmationComponent implements OnInit{
  name:string='';
  address:string ='';
  // localStorage.getItem('checkoutData');
  ngOnInit(){
    let name=localStorage.getItem('checkoutData')
    this.name = name ? name : 'No Name '; 
    let address=localStorage.getItem('Address')

    this.address= address ? address :'no address '

    }
}
