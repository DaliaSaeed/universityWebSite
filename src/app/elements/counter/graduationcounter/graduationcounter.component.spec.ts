import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationcounterComponent } from './graduationcounter.component';

describe('GraduationcounterComponent', () => {
  let component: GraduationcounterComponent;
  let fixture: ComponentFixture<GraduationcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationcounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
