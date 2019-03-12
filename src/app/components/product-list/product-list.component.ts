import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  errorMessage: string;
  productType: string;
  products: Array<any> [];
  isLoading = true;

  constructor(private productService: ProductService, route: ActivatedRoute) {
    this.productType = route.snapshot.data[0]['type'];
    this.products = [];
  }

  getProducts(): void {
    if (this.productType === 'pizzas') {
      this.loadPizzas();
    } else if (this.productType === 'sides') {
      this.loadSides();
    } else if (this.productType === 'desserts') {
      this.loadDesserts();
    } else if (this.productType === 'drinks') {
      this.loadDrinks();
    }
  }

  loadPizzas(): void {
    this.productService.getPizzas().subscribe(
      data => {
        this.products.push(...data.products, ...data.products, ...data.products);
        this.isLoading = false;
      },
      error => this.handleError()
    );
  }

  loadSides(): void {
    this.productService.getSides().subscribe(
      data => {
        this.products = data.products;
        this.isLoading = false;
      },
      error => this.handleError()
    );
  }

  loadDesserts(): void {
    this.productService.getDesserts().subscribe(
      data => {
        this.products = data.products;
        this.isLoading = false;
      },
      error => this.handleError()
    );
  }

  loadDrinks(): void {
    this.productService.getDrinks().subscribe(
      data => {
        this.products = data.products;
        this.isLoading = false;
      },
      error => this.handleError()
    );
  }

  handleError(): void {
    this.errorMessage = 'Arggggh....no food!! Looks like we failed to load the products. Please try again.';
    this.isLoading = false;
  }

  async ngOnInit() {
    this.getProducts();
  }
}
