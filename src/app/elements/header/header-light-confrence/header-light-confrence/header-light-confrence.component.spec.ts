import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLightConfrenceComponent } from './header-light-confrence.component';

describe('HeaderLightConfrenceComponent', () => {
  let component: HeaderLightConfrenceComponent;
  let fixture: ComponentFixture<HeaderLightConfrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLightConfrenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLightConfrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
