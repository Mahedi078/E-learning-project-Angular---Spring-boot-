import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formData = {
    name: '',
    age: null,
    dob: '',
    location: '',
    courseId: '', // শুধু course ID রাখবো
    email: '',
    phone: ''
  };

  courses: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/courses')
      .subscribe(data => {
        this.courses = data;
      });
  }

 onSubmit() {
  const enrollmentPayload = {
    name: this.formData.name,
    age: this.formData.age,
    dob: this.formData.dob,
    location: this.formData.location,
    email: this.formData.email,
    phone: this.formData.phone,
    course: {
      id: this.formData.courseId // ✅ শুধুই ID পাঠাতে হবে
    }
  };

  this.http.post('http://localhost:8080/api/enrollments', enrollmentPayload)
    .subscribe(
      response => {
        alert('Enrollment successful!');
        this.formData = {
          name: '',
          age: null,
          dob: '',
          location: '',
          courseId: '',
          email: '',
          phone: ''
        };
      },
      error => {
        alert('Error occurred during enrollment.');
        console.error(error);
      }
    );
}

}
