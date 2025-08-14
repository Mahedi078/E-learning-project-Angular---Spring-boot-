import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ HttpClient import korte hobe

@Component({
  selector: 'app-manage-enrollments',
  templateUrl: './manage-enrollments.component.html',
  styleUrls: ['./manage-enrollments.component.css']
})
export class ManageEnrollmentsComponent implements OnInit {

  pendingEnrollments: any[] = [];

  // ✅ Inject HttpClient here
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/enrollments/pending')
      .subscribe(data => this.pendingEnrollments = data);
  }

  approve(id: number) {
    this.http.put(`http://localhost:8080/api/enrollments/${id}/approve`, {})
      .subscribe(() => {
        alert('Approved!');
        this.pendingEnrollments = this.pendingEnrollments.filter(e => e.id !== id);
      });
  }

  reject(id: number) {
    this.http.put(`http://localhost:8080/api/enrollments/${id}/reject`, {})
      .subscribe(() => {
        alert('Rejected!');
        this.pendingEnrollments = this.pendingEnrollments.filter(e => e.id !== id);
      });
  }
}
