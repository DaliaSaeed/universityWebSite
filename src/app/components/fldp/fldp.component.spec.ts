import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FLDPComponent } from './fldp.component';

describe('FLDPComponent', () => {
  let component: FLDPComponent;
  let fixture: ComponentFixture<FLDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FLDPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FLDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
