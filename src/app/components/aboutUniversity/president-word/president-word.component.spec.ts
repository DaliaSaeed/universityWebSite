import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentWordComponent } from './president-word.component';

describe('PresidentWordComponent', () => {
  let component: PresidentWordComponent;
  let fixture: ComponentFixture<PresidentWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidentWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
