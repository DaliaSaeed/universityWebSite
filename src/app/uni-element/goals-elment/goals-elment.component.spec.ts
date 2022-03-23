import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsElmentComponent } from './goals-elment.component';

describe('GoalsElmentComponent', () => {
  let component: GoalsElmentComponent;
  let fixture: ComponentFixture<GoalsElmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsElmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsElmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
