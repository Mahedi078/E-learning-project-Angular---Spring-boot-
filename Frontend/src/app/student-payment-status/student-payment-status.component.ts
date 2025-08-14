import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-payment-status',
  templateUrl: './student-payment-status.component.html',
  styleUrls: ['./student-payment-status.component.css']
})
export class StudentPaymentStatusComponent {
  email: string = '';
  payments: any[] = [];
  isLoading: boolean = false;
  submitted: boolean = false;

  constructor(private http: HttpClient) {}

  fetchPayments() {
    this.isLoading = true;
    this.submitted = true;
    this.http.get<any[]>(`http://localhost:8080/api/manual-payment/by-email/${this.email}`)
      .subscribe({
        next: data => {
          this.payments = data;
          this.isLoading = false;
        },
        error: err => {
          console.error(err);
          this.isLoading = false;
        }
      });
  }
}
