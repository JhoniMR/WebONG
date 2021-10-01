import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromActividadesComponent } from './from-actividades.component';

describe('FromActividadesComponent', () => {
  let component: FromActividadesComponent;
  let fixture: ComponentFixture<FromActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
