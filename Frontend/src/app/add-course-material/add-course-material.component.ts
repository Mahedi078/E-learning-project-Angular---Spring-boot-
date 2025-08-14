import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-material',
  templateUrl: './add-course-material.component.html',
  styleUrls: ['./add-course-material.component.css']
})
export class AddCourseMaterialComponent implements OnInit {

  material = {
    type: '',
    title: '',
    url: '',
    course: {
      id: 0
    }
  };

  courses: any[] = [];
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.http.get<any[]>('http://localhost:8080/api/courses').subscribe(data => {
      this.courses = data;
    });
  }

  onSubmit() {
    if (this.material.course.id === 0) {
      this.message = '⚠️ Please select a course.';
      return;
    }

    this.http.post('http://localhost:8080/api/materials', this.material).subscribe({
      next: res => {
        this.message = '✅ Material added successfully!';
        // Optional: Reset form
        this.material = { type: '', title: '', url: '', course: { id: 0 } };
      },
      error: err => {
        console.error(err);
        this.message = '❌ Failed to add material. Check console.';
      }
    });
  }
}
