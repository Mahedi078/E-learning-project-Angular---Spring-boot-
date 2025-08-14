import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  // Static login credentials
  private validEmail: string = 'student@gmail.com';
  private validPassword: string = 'student123';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    const { email, password } = this.loginForm.value;

    if (email === this.validEmail && password === this.validPassword) {
      this.loginError = '';
      this.router.navigate(['/student/dashboard']); // Redirect after login
    } else {
      this.loginError = 'Invalid email or password.';
    }
  }
}
