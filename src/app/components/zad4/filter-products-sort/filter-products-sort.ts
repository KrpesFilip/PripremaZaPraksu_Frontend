import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-filter-products-sort',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './filter-products-sort.html',
  styleUrl: './filter-products-sort.css',
})
export class FilterProductsSort {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchText: string = '';
  selectedCategory: string = '';
  minPrice?: number;
  maxPrice?: number;
  sortOption: string = '';

  categories: string[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.categories = [...new Set(this.products.map(p => p.category))];
    this.applyFilters();
}

applyFilters(): void {
    this.filteredProducts = this.products
      .filter(p =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
      .filter(p =>
        this.selectedCategory ? p.category === this.selectedCategory : true
      )
      .filter(p =>
        (this.minPrice !== undefined ? p.price >= this.minPrice : true) &&
        (this.maxPrice !== undefined ? p.price <= this.maxPrice : true)
      );

    switch (this.sortOption) {
      case 'name-asc':
        this.filteredProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case 'name-desc':
        this.filteredProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
      case 'price-asc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
    }
  }
}
