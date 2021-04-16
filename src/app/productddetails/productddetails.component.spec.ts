import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductddetailsComponent } from './productddetails.component';

describe('ProductddetailsComponent', () => {
  let component: ProductddetailsComponent;
  let fixture: ComponentFixture<ProductddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
