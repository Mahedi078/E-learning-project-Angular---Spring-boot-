import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-payment-approval',
  templateUrl: './admin-payment-approval.component.html',
  styleUrls: ['./admin-payment-approval.component.css']
})
export class AdminPaymentApprovalComponent implements OnInit {

  // ✅ Variable properly declared
  payments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPendingPayments();
  }

  loadPendingPayments() {
    this.http.get<any[]>('http://localhost:8080/api/manual-payment/pending')
      .subscribe(data => this.payments = data);
  }

 approvePayment(id: number) {
  this.http.put(`http://localhost:8080/api/manual-payment/verify/${id}?status=APPROVED`, {}, { responseType: 'text' })
    .subscribe({
      next: (res) => {
        alert('✅ Payment approved successfully!');
        this.loadPendingPayments(); // payment list refresh
      },
      error: (err) => {
        alert('❌ Failed to approve payment. Please try again.');
        console.error(err);
      }
    });
}


  rejectPayment(id: number) {
    this.http.put(`http://localhost:8080/api/manual-payment/verify/${id}?status=REJECTED`, {})
      .subscribe(() => this.loadPendingPayments());
  }
}
