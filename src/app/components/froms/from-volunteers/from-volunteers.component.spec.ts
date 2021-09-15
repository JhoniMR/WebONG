import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromVolunteersComponent } from './from-volunteers.component';

describe('FromVolunteersComponent', () => {
  let component: FromVolunteersComponent;
  let fixture: ComponentFixture<FromVolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromVolunteersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
