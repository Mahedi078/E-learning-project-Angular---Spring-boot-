import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-payment',
  templateUrl: './student-payment.component.html',
  styleUrls: ['./student-payment.component.css']
})
export class StudentPaymentComponent {
  email: string = '';
  courseName: string = '';
  price: number = 0;

  paymentDetails = {
    method: '',
    transactionId: '',
    sender: '',
    email: '',
    courseName: '',
    instrumentName: '',
    amount: 0
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
   this.route.queryParams.subscribe(params => {
  this.email = params['email'];
  this.courseName = params['course'];
  this.price = +params['price'];

  // Directly assign to ngModel-bound object
  this.paymentDetails.email = this.email;
  this.paymentDetails.courseName = this.courseName;
  this.paymentDetails.amount = this.price;
});
  }

  submitManualPayment() {
    this.paymentDetails.email = this.email;
    this.paymentDetails.courseName = this.courseName;
    this.paymentDetails.amount = this.price;

    this.http.post('http://localhost:8080/api/manual-payment', this.paymentDetails).subscribe(
      () => {
        alert('✅ Payment submitted successfully. Admin will verify it.');
        this.paymentDetails = {
          method: '',
          transactionId: '',
          sender: '',
          email: '',
          courseName: '',
          instrumentName: '',
          amount: 0
        };
      },
      error => {
        console.error(error);
        alert('❌ Error submitting payment.');
      }
    );
  }
}
