import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromchatComponent } from './fromchat.component';

describe('FromchatComponent', () => {
  let component: FromchatComponent;
  let fixture: ComponentFixture<FromchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
