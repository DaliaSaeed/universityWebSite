import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAffairsEventsComponent } from './student-affairs-events.component';

describe('StudentAffairsEventsComponent', () => {
  let component: StudentAffairsEventsComponent;
  let fixture: ComponentFixture<StudentAffairsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAffairsEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAffairsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
