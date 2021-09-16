import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVoluntariosComponent } from './table-voluntarios.component';

describe('TableVoluntariosComponent', () => {
  let component: TableVoluntariosComponent;
  let fixture: ComponentFixture<TableVoluntariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVoluntariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
