import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityHistoryComponent } from './university-history.component';

describe('UniversityHistoryComponent', () => {
  let component: UniversityHistoryComponent;
  let fixture: ComponentFixture<UniversityHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
