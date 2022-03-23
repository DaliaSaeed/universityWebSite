import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationStudyNewsComponent } from './graduation-study-news.component';

describe('GraduationStudyNewsComponent', () => {
  let component: GraduationStudyNewsComponent;
  let fixture: ComponentFixture<GraduationStudyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationStudyNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationStudyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
