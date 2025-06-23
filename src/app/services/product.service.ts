import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from '../interfaces/Product';
// Injectable means you can use it in anywhere inside project
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
    console.log("product Service");
    
   }
   getProductList():Observable<ProductResponse>{
    const url="https://dummyjson.com/products"
    return this.http.get<ProductResponse>(url)
   }
  // getData(){
  //   return [
  //     {name:'Ipho','price':98000},
  //     {name:'Redmi','price':10000},
  //     {name:'Samsung','price':50000}
  //   ]
  // }
}
