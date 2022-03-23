import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalConfrenceComponent } from './local-confrence.component';

describe('LocalConfrenceComponent', () => {
  let component: LocalConfrenceComponent;
  let fixture: ComponentFixture<LocalConfrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalConfrenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalConfrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
