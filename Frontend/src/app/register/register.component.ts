import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email = '';
  password = '';
  role = 'STUDENT'; // or 'ADMIN' manually

  message = '';

  constructor(private authService: UserService, private router: Router) {}

  onRegister() {
    this.authService.register(this.email, this.password, this.role).subscribe({
      next: () => {
        this.message = 'Registration successful. Please login.';
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if (err.status === 409) {
          this.message = 'Email already exists.';
        } else {
          this.message = 'Registration failed.';
        }
      }
    });
  }
}
