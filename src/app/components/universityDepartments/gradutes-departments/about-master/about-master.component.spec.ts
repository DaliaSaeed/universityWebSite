import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMasterComponent } from './about-master.component';

describe('AboutMasterComponent', () => {
  let component: AboutMasterComponent;
  let fixture: ComponentFixture<AboutMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
