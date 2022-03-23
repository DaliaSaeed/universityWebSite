import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageVisionUniversityComponent } from './message-vision-university.component';

describe('MessageVisionUniversityComponent', () => {
  let component: MessageVisionUniversityComponent;
  let fixture: ComponentFixture<MessageVisionUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageVisionUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageVisionUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
