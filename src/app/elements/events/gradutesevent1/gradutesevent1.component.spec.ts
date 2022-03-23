import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gradutesevent1Component } from './gradutesevent1.component';

describe('Gradutesevent1Component', () => {
  let component: Gradutesevent1Component;
  let fixture: ComponentFixture<Gradutesevent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gradutesevent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gradutesevent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
