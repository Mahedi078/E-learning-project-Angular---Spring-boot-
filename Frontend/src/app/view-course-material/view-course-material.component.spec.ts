import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseMaterialComponent } from './view-course-material.component';

describe('ViewCourseMaterialComponent', () => {
  let component: ViewCourseMaterialComponent;
  let fixture: ComponentFixture<ViewCourseMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourseMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCourseMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
