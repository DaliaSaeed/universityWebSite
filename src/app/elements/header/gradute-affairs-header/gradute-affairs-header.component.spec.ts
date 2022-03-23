import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduteAffairsHeaderComponent } from './gradute-affairs-header.component';

describe('GraduteAffairsHeaderComponent', () => {
  let component: GraduteAffairsHeaderComponent;
  let fixture: ComponentFixture<GraduteAffairsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduteAffairsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduteAffairsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
