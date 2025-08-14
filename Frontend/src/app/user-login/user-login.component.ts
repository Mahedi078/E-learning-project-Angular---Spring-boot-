import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'] 
})
export class UserLoginComponent {
 email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: UserService, private router: Router) {}

onLogin() {
  this.authService.login(this.email, this.password).subscribe({
    next: (response) => {
      console.log('Login response:', response);
      localStorage.setItem('user', JSON.stringify(response));

      // ✅ Store email directly for easy access
      localStorage.setItem('email', response.email);

      if (response.role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      } else if (response.role === 'student') {
        this.router.navigate(['/student']);
      }
    },
    error: (error) => {
      console.error('Login failed:', error);
      this.errorMessage = 'Invalid email or password';
    }
  });
}


}
