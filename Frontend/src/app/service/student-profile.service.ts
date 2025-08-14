import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentProfile } from '../model/student-profile.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {
  private baseUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  getStudent(email: string): Observable<StudentProfile> {
    return this.http.get<StudentProfile>(`${this.baseUrl}/${email}`);
  }

  getStudentImage(email: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/image/${email}`, { responseType: 'blob' });
  }

  createStudentProfileWithImage(formData: FormData) {
    return this.http.post(`${this.baseUrl}/create-with-image`, formData);
  }

  updateStudentProfileWithImage(formData: FormData) {
    return this.http.put(`${this.baseUrl}/update-with-image`, formData);
  }
}
