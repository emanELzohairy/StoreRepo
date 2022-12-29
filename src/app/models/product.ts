export interface Product {
    id: number,
    img:string,
    name: string,
    description: string,
    price: number,
    count: number
   
}  

// export interface checkout{
//     name:string,
//     address:string,
//     creditCard:number,
//     Product:Product
// }

export class checkout {

    constructor(
      public creditCard: number,
      public name: string,
      public address: string
    ) {  }
  
  }