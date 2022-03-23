import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAffairsComponent } from './students-affairs.component';

describe('StudentsAffairsComponent', () => {
  let component: StudentsAffairsComponent;
  let fixture: ComponentFixture<StudentsAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAffairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
