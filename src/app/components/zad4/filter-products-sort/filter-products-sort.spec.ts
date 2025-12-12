import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProductsSort } from './filter-products-sort';

describe('FilterProductsSort', () => {
  let component: FilterProductsSort;
  let fixture: ComponentFixture<FilterProductsSort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterProductsSort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProductsSort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
