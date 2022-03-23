import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrenceCounterComponent } from './confrence-counter.component';

describe('ConfrenceCounterComponent', () => {
  let component: ConfrenceCounterComponent;
  let fixture: ComponentFixture<ConfrenceCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfrenceCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrenceCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
