import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalCooperationExternalRelationsComponent } from './international-cooperation-external-relations.component';

describe('InternationalCooperationExternalRelationsComponent', () => {
  let component: InternationalCooperationExternalRelationsComponent;
  let fixture: ComponentFixture<InternationalCooperationExternalRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalCooperationExternalRelationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalCooperationExternalRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
