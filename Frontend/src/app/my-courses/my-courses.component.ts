import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../service/enrollment.service';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses: Course[] = [];
  email: string = '';
  errorMessage: string = '';

  constructor(
    private enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email') || '';
    if (this.email) {
      this.loadMyCourses();
    } else {
      this.errorMessage = 'User email not found. Please login.';
    }
  }

  loadMyCourses(): void {
    this.enrollmentService.getApprovedCoursesByEmail(this.email).subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => {
        this.errorMessage = 'Courses load kora jay nai!';
        console.error(err);
      }
    });
  }

  // 🔽 Course material dekhano method
  viewMaterials(courseId: number): void {
    this.router.navigate(['/course-materials', courseId]);
  }
}
