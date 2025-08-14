import { Component, OnInit } from '@angular/core';
import { StudentCourseReportDTO, AdminService } from '../service/admin.service';

@Component({
  selector: 'app-student-course-report',
  templateUrl: './student-course-report.component.html',
  styleUrls: ['./student-course-report.component.css']
})
export class StudentCourseReportComponent implements OnInit {

  studentCourseReports: StudentCourseReportDTO[] = [];
  totalAmount: number = 0;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getStudentCourseReport().subscribe(data => {
      this.studentCourseReports = data;

      // ✅ Approved status গুলোর coursePrice যোগ করে totalAmount হিসাব
      this.totalAmount = this.studentCourseReports
        .filter(report => report.financialStatus === 'APPROVED')
        .reduce((sum, report) => sum + report.coursePrice, 0);
    }, error => {
      alert('Failed to load report');
    });
  }

}
