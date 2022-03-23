import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityVisionMessageComponent } from './university-vision-message.component';

describe('UniversityVisionMessageComponent', () => {
  let component: UniversityVisionMessageComponent;
  let fixture: ComponentFixture<UniversityVisionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityVisionMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityVisionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
