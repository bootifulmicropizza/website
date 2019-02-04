import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;
  title = 'Bootiful Micro Pizza';
  pizzas: Array<any> [];
  sides: Array<any> [];
  desserts: Array<any> [];
  drinks: Array<any> [];

  constructor(public oktaAuth: OktaAuthService, private productService: ProductService, private http: HttpClient) {
    this.pizzas = [];
    this.sides = [];
    this.desserts = [];
    this.drinks = [];
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );

    this.productService.getPizzas().subscribe(data => {
      this.pizzas = data.products;
    });
    this.productService.getSides().subscribe(data => {
      this.sides = data.products;
    });
    this.productService.getDesserts().subscribe(data => {
      this.desserts = data.products;
    });
    this.productService.getDrinks().subscribe(data => {
      this.drinks = data.products;
    });
  }

  logout() {
    this.oktaAuth.logout('/');
  }
}
