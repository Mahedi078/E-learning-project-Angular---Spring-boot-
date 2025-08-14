import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-status-student',
  templateUrl: './check-status-student.component.html',
  styleUrls: ['./check-status-student.component.css']
})
export class CheckStatusStudentComponent implements OnInit {

  email: string = '';
  enroll: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // তুমি চাইলে এখানে default email set করতে পারো বা route থেকে আনতে পারো
  }

  checkStatus() {
    this.http.get<any>(`http://localhost:8080/api/enrollments/by-email/${this.email}`)
      .subscribe(
        data => {
          this.enroll = data;
        },
        error => {
          this.enroll = null;
          alert('Enrollment not found or error occurred.');
        }
      );
  }
}
