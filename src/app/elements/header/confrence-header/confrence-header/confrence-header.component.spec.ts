import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrenceHeaderComponent } from './confrence-header.component';

describe('ConfrenceHeaderComponent', () => {
  let component: ConfrenceHeaderComponent;
  let fixture: ComponentFixture<ConfrenceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfrenceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrenceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
