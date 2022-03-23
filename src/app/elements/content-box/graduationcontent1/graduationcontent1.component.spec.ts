import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graduationcontent1Component } from './graduationcontent1.component';

describe('Graduationcontent1Component', () => {
  let component: Graduationcontent1Component;
  let fixture: ComponentFixture<Graduationcontent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graduationcontent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graduationcontent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
