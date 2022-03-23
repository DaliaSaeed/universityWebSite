import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrenceSliderComponent } from './confrence-slider.component';

describe('ConfrenceSliderComponent', () => {
  let component: ConfrenceSliderComponent;
  let fixture: ComponentFixture<ConfrenceSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfrenceSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrenceSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
