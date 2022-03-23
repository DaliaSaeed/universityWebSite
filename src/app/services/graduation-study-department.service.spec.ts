import { TestBed } from '@angular/core/testing';

import { GraduationStudyDepartmentService } from './graduation-study-department.service';

describe('GraduationStudyDepartmentService', () => {
  let service: GraduationStudyDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraduationStudyDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
