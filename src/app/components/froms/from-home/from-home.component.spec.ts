import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromHomeComponent } from './from-home.component';

describe('FromHomeComponent', () => {
  let component: FromHomeComponent;
  let fixture: ComponentFixture<FromHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
