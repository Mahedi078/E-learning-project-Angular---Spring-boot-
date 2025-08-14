// import { Component, OnInit } from '@angular/core';
// import { Course } from '../model/course.model';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-course-form',
//   templateUrl: './course-form.component.html',
//   styleUrls: ['./course-form.component.css']
// })
// export class CourseFormComponent implements OnInit {

//   course: Course = {
//     title: '',
//     description: '',
//     teacherId: 0,
//     categoryId: 0,
//     status: 'active'
//   };

//   constructor(private http: HttpClient) {}
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

//   onSubmit() {
//     this.http.post<Course>('http://localhost:8080/api/courses', this.course)
//       .subscribe(() => {
//         alert('Course added successfully!');
//         this.course = { title: '', description: '', teacherId: 0, categoryId: 0, status: 'active' };
//       });
//   }
// }



