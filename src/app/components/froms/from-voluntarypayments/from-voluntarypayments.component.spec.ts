import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromVoluntarypaymentsComponent } from './from-voluntarypayments.component';

describe('FromVoluntarypaymentsComponent', () => {
  let component: FromVoluntarypaymentsComponent;
  let fixture: ComponentFixture<FromVoluntarypaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromVoluntarypaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromVoluntarypaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
