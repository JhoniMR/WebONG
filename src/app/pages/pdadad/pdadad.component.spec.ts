import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdadadComponent } from './pdadad.component';

describe('PdadadComponent', () => {
  let component: PdadadComponent;
  let fixture: ComponentFixture<PdadadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdadadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdadadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
