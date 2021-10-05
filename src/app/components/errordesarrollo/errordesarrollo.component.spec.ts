import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrordesarrolloComponent } from './errordesarrollo.component';

describe('ErrordesarrolloComponent', () => {
  let component: ErrordesarrolloComponent;
  let fixture: ComponentFixture<ErrordesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrordesarrolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrordesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
