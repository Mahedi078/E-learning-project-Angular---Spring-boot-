import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.css']
})
export class AdminLoginFormComponent implements OnInit {

 username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onLogin() {
    if (this.username === 'admin' && this.password === '123') {
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert('❌ Invalid username or password!');
    }
  }

}
