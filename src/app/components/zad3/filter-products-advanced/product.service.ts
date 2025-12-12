import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root', // Makes it available app-wide
})
export class ProductService {
  private products: Product[] = [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'Phone', category: 'Electronics', price: 800 },
    { name: 'Shirt', category: 'Clothing', price: 40 },
    { name: 'Shoes', category: 'Clothing', price: 100 },
    { name: 'Book', category: 'Books', price: 20 },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
