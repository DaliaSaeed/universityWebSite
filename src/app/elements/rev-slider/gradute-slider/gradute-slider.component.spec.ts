import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduteSliderComponent } from './gradute-slider.component';

describe('GraduteSliderComponent', () => {
  let component: GraduteSliderComponent;
  let fixture: ComponentFixture<GraduteSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduteSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduteSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
