import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationStudyNewDetailsComponent } from './graduation-study-new-details.component';

describe('GraduationStudyNewDetailsComponent', () => {
  let component: GraduationStudyNewDetailsComponent;
  let fixture: ComponentFixture<GraduationStudyNewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationStudyNewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationStudyNewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
