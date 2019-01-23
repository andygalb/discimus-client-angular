import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatSpinner, MatTableModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {Component} from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherHomeComponent } from './teacher/teacher-home/teacher-home.component';
import { CourseComponent } from './course/course.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { QuestionComponent } from './question/question.component';
import { QuestionEditComponent } from './question/question-edit/question-edit.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { SequenceComponent } from './sequence/sequence.component';
import { AdminComponent } from './admin/admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminQuestionComponent } from './admin/admin-question/admin-question.component';
import { AdminCourseComponent } from './admin/admin-course/admin-course.component';
import { DocumentsComponent } from './course/documents/documents.component';
import { CourseHomeComponent } from './course/course-home/course-home.component';

import {UserService} from './user.service';
import {CourseSequenceQuestionService} from './course-sequence-question.service';
import {FormBuilder, FormsModule} from '@angular/forms';
import { SequenceEditComponent } from './sequence/sequence-edit/sequence-edit.component';
import { SequenceHomeComponent } from './sequence/sequence-home/sequence-home.component';
import { AdminSequenceComponent } from './admin/admin-sequence/admin-sequence.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    TeacherHomeComponent,
    CourseComponent,
    CourseEditComponent,
    QuestionComponent,
    QuestionEditComponent,
    QuestionDetailComponent,
    SequenceComponent,
    AdminComponent,
    AdminUserComponent,
    AdminQuestionComponent,
    AdminCourseComponent,
    DocumentsComponent,
    CourseHomeComponent,
    SequenceEditComponent,
    SequenceHomeComponent,
    AdminSequenceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule
  ],
  providers: [UserService,
              CourseSequenceQuestionService,
              FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
