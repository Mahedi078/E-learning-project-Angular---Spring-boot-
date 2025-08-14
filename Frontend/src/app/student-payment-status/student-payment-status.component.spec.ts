import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPaymentStatusComponent } from './student-payment-status.component';

describe('StudentPaymentStatusComponent', () => {
  let component: StudentPaymentStatusComponent;
  let fixture: ComponentFixture<StudentPaymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPaymentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPaymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
