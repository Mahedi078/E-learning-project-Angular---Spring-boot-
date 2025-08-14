import { Component, OnInit } from '@angular/core';
import { StudentProfile } from '../model/student-profile.model';
import { StudentProfileService } from '../service/student-profile.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  student: StudentProfile = {
    name: '',
    email: '',
    age: 0,
    course: ''
  };

  previewUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(private profileService: StudentProfileService) {}

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    if (email) {
      this.profileService.getStudent(email).subscribe(data => {
        this.student = data;
      });

      this.profileService.getStudentImage(email).subscribe(blob => {
        const reader = new FileReader();
        reader.onload = () => this.previewUrl = reader.result;
        reader.readAsDataURL(blob);
      });
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = e => this.previewUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }

  submitProfile(isUpdate: boolean): void {
    const email = this.student.email || localStorage.getItem('email') || '';
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', this.student.name);
    formData.append('age', this.student.age.toString());
    formData.append('course', this.student.course);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    const request = isUpdate
      ? this.profileService.updateStudentProfileWithImage(formData)
      : this.profileService.createStudentProfileWithImage(formData);

    request.subscribe({
      next: () => alert(isUpdate ? '✅ Profile updated!' : '✅ Profile created!'),
      error: err => alert('❌ Error: ' + err.error)
    });
  }
}
