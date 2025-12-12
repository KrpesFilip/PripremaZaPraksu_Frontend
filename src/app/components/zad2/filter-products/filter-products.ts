import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './filter-products.html',
  styleUrl: './filter-products.css',
})
export class FilterProducts {
  searchText: string = '';

  products = [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'Phone', category: 'Electronics', price: 900 },
    { name: 'Shoes', category: 'Fashion', price: 80 },
    { name: 'Backpack', category: 'Accessories', price: 40 },
  ];

  get filteredProducts() {
    const term = this.searchText.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(term)
    );
  }
}
