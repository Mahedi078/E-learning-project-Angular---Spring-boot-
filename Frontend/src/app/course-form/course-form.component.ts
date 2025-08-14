import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  course: Course = {
    title: '',
    description: '',
    teacherId: 0,
    categoryId: 0,
    status: 'active',
     price: 0
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Optional: load data or init logic
  }

  onSubmit(): void {
    const apiUrl = 'http://localhost:8080/api/courses'; // ✅ Update if your backend URL is different

    this.http.post<Course>(apiUrl, this.course).subscribe({
      next: (response) => {
        alert('✅ Course added successfully!');
        console.log('Saved course:', response);
        this.resetForm();
      },
      error: (err) => {
        console.error('❌ Error saving course:', err);
        alert('Something went wrong!');
      }
    });
  }

  resetForm(): void {
    this.course = {
      title: '',
      description: '',
      teacherId: 0,
      categoryId: 0,
      status: 'active',
       price: 0
    };
  }
}
