import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBreweryComponent } from './shop-brewery.component';

describe('ShopBreweryComponent', () => {
  let component: ShopBreweryComponent;
  let fixture: ComponentFixture<ShopBreweryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBreweryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
