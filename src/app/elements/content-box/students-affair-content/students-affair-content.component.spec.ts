import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAffairContentComponent } from './students-affair-content.component';

describe('StudentsAffairContentComponent', () => {
  let component: StudentsAffairContentComponent;
  let fixture: ComponentFixture<StudentsAffairContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAffairContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAffairContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
