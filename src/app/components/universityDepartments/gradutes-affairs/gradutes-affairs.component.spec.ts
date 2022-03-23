import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradutesAffairsComponent } from './gradutes-affairs.component';

describe('GradutesAffairsComponent', () => {
  let component: GradutesAffairsComponent;
  let fixture: ComponentFixture<GradutesAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradutesAffairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradutesAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
