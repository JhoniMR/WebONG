import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromServicesComponent } from './from-services.component';

describe('FromServicesComponent', () => {
  let component: FromServicesComponent;
  let fixture: ComponentFixture<FromServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
