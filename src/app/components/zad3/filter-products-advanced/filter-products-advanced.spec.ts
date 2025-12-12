import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProductsAdvanced } from './filter-products-advanced';

describe('FilterProductsAdvanced', () => {
  let component: FilterProductsAdvanced;
  let fixture: ComponentFixture<FilterProductsAdvanced>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterProductsAdvanced]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProductsAdvanced);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
