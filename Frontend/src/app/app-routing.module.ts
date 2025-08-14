import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { StudentComponent } from './student/student.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { AdminLoginFormComponent } from './admin-login-form/admin-login-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentCourseListComponent } from './student-course-list/student-course-list.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ManageEnrollmentsComponent } from './manage-enrollments/manage-enrollments.component';
import { CheckStatusStudentComponent } from './check-status-student/check-status-student.component';
import { StudentPaymentComponent } from './student-payment/student-payment.component';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { AdminPaymentApprovalComponent } from './admin-payment-approval/admin-payment-approval.component';
import { StudentPaymentStatusComponent } from './student-payment-status/student-payment-status.component';
import { StudentCourseMaterialComponent } from './student-course-material/student-course-material.component';
import { AddCourseMaterialComponent } from './add-course-material/add-course-material.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ViewCourseMaterialComponent } from './view-course-material/view-course-material.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizTakeComponent } from './quiz-take/quiz-take.component';
import { QuizCreateComponent } from './quiz-create/quiz-create.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { CertificateComponent } from './certificate/certificate.component';
import { StudentCourseReportComponent } from './student-course-report/student-course-report.component';

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "courses", component: CourseComponent },
  { path: "ourTeam", component: OurTeamComponent },
  { path: "testimonial", component: TestimonialComponent },
  { path: "contact", component: ContactComponent },
  { path: "studentLogin", component: StudentLoginComponent },
  { path: "userLogin", component: UserLoginComponent },
  { path: "view", component: ViewComponent },
  { path: "add", component: AddComponent },
  { path: "admin-login-form", component: AdminLoginFormComponent },


  {
    path: 'admin-dashboard',
    component: AdminLayoutComponent, // layout with sidebar
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'student', component: StudentComponent },
      { path: 'course-form', component: CourseFormComponent },
      { path: 'course-category', component: CourseCategoryComponent },
      { path: 'manage-enrollments', component: ManageEnrollmentsComponent },
      { path: 'approve-payment', component: AdminPaymentApprovalComponent },
      { path: 'add-course-material', component: AddCourseMaterialComponent },
      { path: 'quiz-create', component: QuizCreateComponent },
      { path: 'report', component: StudentCourseReportComponent },
     

    ]
  },
  {
    path: '',
    component: StudentLayoutComponent,
    children: [
      { path: "student", component: StudentDashboardComponent }, // default
      { path: "student/courses", component: StudentCourseListComponent },
      { path: "courses/registration", component: RegistrationComponent },
      { path: "student/check-status", component: CheckStatusStudentComponent },
      { path: 'student/check-status/payment', component: StudentPaymentComponent },
      { path: 'student/payment-status', component: StudentPaymentStatusComponent },
      //{ path: 'student/course-material', component: StudentCourseMaterialComponent },
      // { path:  'course-materials/:id', component: StudentCourseMaterialComponent },
      { path: 'student/course-materials/:id', component: StudentCourseMaterialComponent },
      { path: 'student/my-courses', component: MyCoursesComponent },
      { path: 'course-materials/:id', component: ViewCourseMaterialComponent },
      { path: 'student/quizzes', component: QuizListComponent },
      { path: 'student/quiz/:id', component: QuizTakeComponent },
      { path: 'student/profile', component: StudentProfileComponent },
      { path: 'student/certificate', component:CertificateComponent },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
