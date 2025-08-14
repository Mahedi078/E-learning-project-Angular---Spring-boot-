import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-course-material',
  templateUrl: './view-course-material.component.html',
  styleUrls: ['./view-course-material.component.css']
})
export class ViewCourseMaterialComponent implements OnInit {
  courseId: number = 0;
  materials: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.getMaterialsByCourseId();
  }

  getMaterialsByCourseId(): void {
    this.http.get<any[]>(`http://localhost:8080/api/materials/by-course/${this.courseId}`)
      .subscribe({
        next: (data) => this.materials = data,
        error: (error) => console.error('Error loading materials: ', error)
      });
  }

  getSafeYoutubeUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  extractVideoId(url: string): string {
    const regExp = /(?:youtube\.com.*(?:\?v=|\/embed\/)|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : '';
  }
}
