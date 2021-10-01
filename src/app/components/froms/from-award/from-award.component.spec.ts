import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAwardComponent } from './from-award.component';

describe('FromAwardComponent', () => {
  let component: FromAwardComponent;
  let fixture: ComponentFixture<FromAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromAwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
