// admin.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface StudentCourseReportDTO {
  studentName: string;
  studentEmail: string;
  courseTitle: string;
  coursePrice: number;
  financialStatus: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getStudentCourseReport(): Observable<StudentCourseReportDTO[]> {
    return this.http.get<StudentCourseReportDTO[]>(`${this.baseUrl}/admin/student-course-report`);
  }
}
