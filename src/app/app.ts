import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './components/zad1/counter/counter';
import { FilterProducts } from './components/zad2/filter-products/filter-products';
import { FilterProductsAdvanced } from './components/zad3/filter-products-advanced/filter-products-advanced';
import { FilterProductsSort } from './components/zad4/filter-products-sort/filter-products-sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserManagement } from './components/zad5/user-management/user-management';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    Counter, 
    FilterProducts, 
    FilterProductsAdvanced, 
    FilterProductsSort, 
    UserManagement, 
    FormsModule,          
    ReactiveFormsModule  
    ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('PripremaPrakse_FilipKrpes');
}
