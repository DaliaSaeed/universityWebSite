import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAffairsHeaderComponent } from './students-affairs-header.component';

describe('StudentsAffairsHeaderComponent', () => {
  let component: StudentsAffairsHeaderComponent;
  let fixture: ComponentFixture<StudentsAffairsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAffairsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAffairsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
