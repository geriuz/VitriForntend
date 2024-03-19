import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiUrl:string =  "http://localhost:8080/api/v1/admin/productos";
  constructor(private httpClient:HttpClient) { }

  getProduct():Observable<Product[]>{
      return this.httpClient.get<Product[]>(this.apiUrl);
  }

  createProduct(formData:any):Observable<any>{
      return this.httpClient.post<Product>(this.apiUrl, formData)
  }

  deleteProductById(id:number):Observable<any>{
    return this.httpClient.delete(this.apiUrl+"/"+id)
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.apiUrl+"/"+id)
  }
}
