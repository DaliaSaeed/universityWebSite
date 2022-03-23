import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderCenterComponent } from './calender-center.component';

describe('CalenderCenterComponent', () => {
  let component: CalenderCenterComponent;
  let fixture: ComponentFixture<CalenderCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
