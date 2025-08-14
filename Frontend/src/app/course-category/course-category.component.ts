import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CourseCategoryComponent implements OnInit {
  category = {
    id: null,
    code:'',
    name: '',
    description: ''
  };

  categories: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCategories();
  }

  onSubmit() {
    this.http.post('http://localhost:8080/course-categories', this.category).subscribe(
      res => {
        console.log('Category added', res);
        this.category = { id: null, code:'', name: '', description: '' };
        this.fetchCategories();
      },
      err => console.error('Error adding category', err)
    );
  }

  fetchCategories() {
    this.http.get<any[]>('http://localhost:8080/course-categories').subscribe(
      data => this.categories = data,
      err => console.error('Error fetching categories', err)
    );
  }
}
