import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-filter-products-advanced',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './filter-products-advanced.html',
  styleUrl: './filter-products-advanced.css',
})
export class FilterProductsAdvanced {
  products: Product[] = [];
    filteredProducts: Product[] = [];
    searchText: string = '';
    selectedCategory: string = '';

    categories: string[] = [];

    constructor(private productService: ProductService) {
      this.products = this.productService.getProducts();
      this.filteredProducts = [...this.products];

      
      this.categories = [...new Set(this.products.map(p => p.category))];
    }

    filterProducts() {
      this.filteredProducts = this.products.filter(p =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
        (this.selectedCategory ? p.category === this.selectedCategory : true)
      );
    }
}
