import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../service/student.sevice';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  student: Student = { name: '', email: '', age: 0, course: '' };
  isEdit = false;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAllStudents().subscribe(data => this.students = data);
  }

  saveStudent() {
    if (this.isEdit && this.student.id) {
      this.studentService.updateStudent(this.student.id, this.student).subscribe(() => {
        this.loadStudents();
        this.resetForm();
      });
    } else {
      this.studentService.addStudent(this.student).subscribe(() => {
        this.loadStudents();
        this.resetForm();
      });
    }
  }

  editStudent(student: Student) {
    this.student = { ...student };
    this.isEdit = true;
  }

  deleteStudent(id: number | undefined) {
    if (id && confirm('Are you sure to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => this.loadStudents());
    }
  }

  resetForm() {
    this.student = { name: '', email: '', age: 0, course: '' };
    this.isEdit = false;
  }
}
