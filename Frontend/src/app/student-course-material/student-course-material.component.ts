import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface CourseMaterial {
  id: number;
  type: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-student-course-material',
  templateUrl: './student-course-material.component.html',
  styleUrls: ['./student-course-material.component.css']
})
export class StudentCourseMaterialComponent implements OnInit {
  courseId: number = 0;
  materials: CourseMaterial[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('id')!;
    this.loadMaterials();
  }

  loadMaterials() {
    this.loading = true;
    this.error = '';
    this.http.get<CourseMaterial[]>(`http://localhost:8080/api/materials/by-course/${this.courseId}`)
      .subscribe({
        next: (data) => {
          this.materials = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load materials. Please try again later.';
          this.loading = false;
        }
      });
  }
}


