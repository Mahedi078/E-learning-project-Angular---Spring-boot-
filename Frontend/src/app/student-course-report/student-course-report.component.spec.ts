import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseReportComponent } from './student-course-report.component';

describe('StudentCourseReportComponent', () => {
  let component: StudentCourseReportComponent;
  let fixture: ComponentFixture<StudentCourseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCourseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
