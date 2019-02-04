import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private http: HttpClient) {

  }

  getPizzas(): Observable<any> {
    return this.http.get('https://www.bootifulmicropizza.com/api/catalogue/pizza/');
    // return this.http.get(environment.xhrUrl + '/api/catalogue/pizza/');
  }

  getSides(): Observable<any> {
    return this.http.get(environment.xhrUrl + '/api/catalogue/side/');
  }

  getDesserts(): Observable<any> {
    return this.http.get(environment.xhrUrl + '/api/catalogue/dessert/');
  }

  getDrinks(): Observable<any> {
    return this.http.get(environment.xhrUrl + '/api/catalogue/drink/');
  }
}
