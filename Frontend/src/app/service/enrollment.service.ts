import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private baseUrl = 'http://localhost:8080/api/enrollments';

  constructor(private http: HttpClient) { }

  getApprovedCoursesByEmail(email: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/approved/${email}`);
  }
}
