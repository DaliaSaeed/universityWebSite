import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalConfrenceComponent } from './international-confrence.component';

describe('InternationalConfrenceComponent', () => {
  let component: InternationalConfrenceComponent;
  let fixture: ComponentFixture<InternationalConfrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalConfrenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalConfrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
