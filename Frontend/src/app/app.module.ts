import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { JoinComponent } from './join/join.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { StudentComponent } from './student/student.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
import { RegisterComponent } from './register/register.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ViewCourseMaterialComponent } from './view-course-material/view-course-material.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizTakeComponent } from './quiz-take/quiz-take.component';
import { QuizCreateComponent } from './quiz-create/quiz-create.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { CertificateComponent } from './certificate/certificate.component';
import { StudentCourseReportComponent } from './student-course-report/student-course-report.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    OurTeamComponent,
    TestimonialComponent,
    JoinComponent,
    ContactComponent,
    RegistrationComponent,
    StudentLoginComponent,
    UserLoginComponent,
    AddComponent,
    ViewComponent,
    CourseCategoryComponent,
    StudentComponent,
    SidebarComponent,
    AdminLoginFormComponent,
    AdminDashboardComponent,
    CourseFormComponent,
    StudentDashboardComponent,
    StudentCourseListComponent,
    AdminLayoutComponent,
    ManageEnrollmentsComponent,
    CheckStatusStudentComponent,
    StudentPaymentComponent,
    StudentLayoutComponent,
    AdminPaymentApprovalComponent,
    StudentPaymentStatusComponent,
    StudentCourseMaterialComponent,
    AddCourseMaterialComponent,
    RegisterComponent,
    MyCoursesComponent,
    ViewCourseMaterialComponent,
    QuizListComponent,
    QuizTakeComponent,
    QuizCreateComponent,
    StudentProfileComponent,
    CertificateComponent,
    StudentCourseReportComponent,

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
