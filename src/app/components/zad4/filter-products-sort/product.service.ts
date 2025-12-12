import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { name: 'Laptop', category: 'Electronics', price: 1500 },
    { name: 'Phone', category: 'Electronics', price: 800 },
    { name: 'Shirt', category: 'Clothing', price: 50 },
    { name: 'Shoes', category: 'Clothing', price: 100 },
    { name: 'Book', category: 'Books', price: 20 },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
