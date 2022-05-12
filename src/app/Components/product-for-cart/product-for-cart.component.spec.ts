import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductForCartComponent } from './product-for-cart.component';

describe('ProductForCartComponent', () => {
  let component: ProductForCartComponent;
  let fixture: ComponentFixture<ProductForCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductForCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductForCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
