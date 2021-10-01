import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEjesComponent } from './from-ejes.component';

describe('FromEjesComponent', () => {
  let component: FromEjesComponent;
  let fixture: ComponentFixture<FromEjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromEjesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
