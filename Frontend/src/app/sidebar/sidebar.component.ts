import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isSidebarCollapsed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  menuItems = [
    { label: 'Dashboard', link: '/admin-dashboard', icon: 'bi bi-speedometer2' },
    { label: 'Add Student', link: '/admin-dashboard/student', icon: 'bi bi-person-plus' },
    { label: 'Courses', link: '/admin-dashboard/course-form', icon: 'bi bi-journal-plus' },
    { label: 'Course Category', link: '/admin-dashboard/course-category', icon: 'bi bi-tags' },
    { label: 'Manage Enrollment', link: '/admin-dashboard/manage-enrollments', icon: 'bi bi-folder-check' },
    { label: 'Approve Payment', link: '/admin-dashboard/approve-payment', icon: 'bi bi-cash-coin' },
    { label: 'Add Material', link: '/admin-dashboard/add-course-material', icon: 'bi bi-upload' },
    { label: 'Add Quiz', link: '/admin-dashboard/quiz-create', icon: 'bi bi-question-circle' },
    { label: 'Student Report', link: '/admin-dashboard/report', icon: 'bi bi-bar-chart' }
  ];
}
