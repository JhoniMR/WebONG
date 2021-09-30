import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAboutUsComponent } from './from-about-us.component';

describe('FromAboutUsComponent', () => {
  let component: FromAboutUsComponent;
  let fixture: ComponentFixture<FromAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
