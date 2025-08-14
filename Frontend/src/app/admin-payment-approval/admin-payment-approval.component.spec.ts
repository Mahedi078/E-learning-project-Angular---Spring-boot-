import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentApprovalComponent } from './admin-payment-approval.component';

describe('AdminPaymentApprovalComponent', () => {
  let component: AdminPaymentApprovalComponent;
  let fixture: ComponentFixture<AdminPaymentApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaymentApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
