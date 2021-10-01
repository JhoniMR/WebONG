import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAbeneficiosComponent } from './from-abeneficios.component';

describe('FromAbeneficiosComponent', () => {
  let component: FromAbeneficiosComponent;
  let fixture: ComponentFixture<FromAbeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromAbeneficiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAbeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
