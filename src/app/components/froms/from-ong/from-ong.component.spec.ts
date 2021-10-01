import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOngComponent } from './from-ong.component';

describe('FromOngComponent', () => {
  let component: FromOngComponent;
  let fixture: ComponentFixture<FromOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromOngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
