import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoBreweryComponent } from './contacto-brewery.component';

describe('ContactoBreweryComponent', () => {
  let component: ContactoBreweryComponent;
  let fixture: ComponentFixture<ContactoBreweryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoBreweryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
