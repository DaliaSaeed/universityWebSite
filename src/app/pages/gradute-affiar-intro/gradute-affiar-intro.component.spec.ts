import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduteAffiarIntroComponent } from './gradute-affiar-intro.component';

describe('GraduteAffiarIntroComponent', () => {
  let component: GraduteAffiarIntroComponent;
  let fixture: ComponentFixture<GraduteAffiarIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduteAffiarIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduteAffiarIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
