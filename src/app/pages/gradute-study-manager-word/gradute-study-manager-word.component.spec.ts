import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduteStudyManagerWordComponent } from './gradute-study-manager-word.component';

describe('GraduteStudyManagerWordComponent', () => {
  let component: GraduteStudyManagerWordComponent;
  let fixture: ComponentFixture<GraduteStudyManagerWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduteStudyManagerWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduteStudyManagerWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
