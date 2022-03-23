import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDiplomaComponent } from './about-diploma.component';

describe('AboutDiplomaComponent', () => {
  let component: AboutDiplomaComponent;
  let fixture: ComponentFixture<AboutDiplomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDiplomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDiplomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
