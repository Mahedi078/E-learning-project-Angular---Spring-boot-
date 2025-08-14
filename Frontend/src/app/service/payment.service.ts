// src/app/services/payment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ManualPayment {
  id: number;
  method: string;
  transactionId: string;
  sender: string;
  email: string;
  status: string;
  submittedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:8080/api/manual-payment';

  constructor(private http: HttpClient) {}

  getPaymentsByEmail(email: string): Observable<ManualPayment[]> {
    return this.http.get<ManualPayment[]>(`${this.baseUrl}/by-email/${email}`);
  }
}
