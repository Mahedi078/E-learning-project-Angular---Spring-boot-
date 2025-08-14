import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Course[]>('http://localhost:8080/api/courses')
      .subscribe(data => this.courses = data);
  }
}
