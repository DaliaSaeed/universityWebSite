import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPhdComponent } from './about-phd.component';

describe('AboutPhdComponent', () => {
  let component: AboutPhdComponent;
  let fixture: ComponentFixture<AboutPhdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPhdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
