import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAboutUsComponent } from './table-about-us.component';

describe('TableAboutUsComponent', () => {
  let component: TableAboutUsComponent;
  let fixture: ComponentFixture<TableAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
