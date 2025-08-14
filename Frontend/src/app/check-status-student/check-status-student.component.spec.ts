import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStatusStudentComponent } from './check-status-student.component';

describe('CheckStatusStudentComponent', () => {
  let component: CheckStatusStudentComponent;
  let fixture: ComponentFixture<CheckStatusStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckStatusStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStatusStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
