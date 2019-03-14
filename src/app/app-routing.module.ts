import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {QuestionComponent} from './question/question.component';
import {SequenceComponent} from './sequence/sequence.component';
import {CourseComponent} from './course/course.component';
import {AboutComponent} from './about/about.component';
import {AdminComponent} from './admin/admin/admin.component';
import {AdminUserComponent} from './admin/admin-user/admin-user.component';
import {AdminQuestionComponent} from './admin/admin-question/admin-question.component';
import {AdminCourseComponent} from './admin/admin-course/admin-course.component';
import {DocumentsComponent} from './course/documents/documents.component';
import {CourseHomeComponent} from './course/course-home/course-home.component';
import {CourseEditComponent} from './course/course-edit/course-edit.component';
import {SequenceEditComponent} from './sequence/sequence-edit/sequence-edit.component';
import {SequenceHomeComponent} from './sequence/sequence-home/sequence-home.component';
import {AdminSequenceComponent} from './admin/admin-sequence/admin-sequence.component';
import {RoleGuardService} from './role-guard.service';
import {CourseSequenceComponent} from './course/course-sequence/course-sequence.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent  },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuardService], data: {expectedRoles: ['admin']},
    children: [
      { path: 'users', component: AdminUserComponent , outlet: 'adminSection'},
      { path: 'questions', component: AdminQuestionComponent , outlet: 'adminSection'},
      { path: 'courses', component: AdminCourseComponent , outlet: 'adminSection'},
      { path: 'sequences', component: AdminSequenceComponent , outlet: 'adminSection'}
    ]
  },
  { path: 'home', component: HomeComponent, canActivate: [RoleGuardService], data: {expectedRoles: ['admin', 'teacher', 'student'] }},
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentComponent, canActivate: [RoleGuardService], data: {expectedRoles: ['admin', 'student' ] }},
  { path: 'teacher', component: TeacherComponent, canActivate: [RoleGuardService], data: {expectedRoles: ['admin', 'teacher'] }},
  { path: 'question', component: QuestionComponent, canActivate: [RoleGuardService], data: {expectedRoles: ['admin', 'teacher', 'student'] }},
  { path: 'sequence/:id', component: SequenceComponent, canActivate: [RoleGuardService], data: {expectedRoles: ['admin', 'teacher', 'student']},
    children: [
      { path: 'edit', component: SequenceEditComponent , outlet: 'sequenceSection'},
      { path: 'home', component: SequenceHomeComponent , outlet: 'sequenceSection'},
      ]},
  { path: 'course/:id', component: CourseComponent, canActivate: [RoleGuardService], data: {expectedRoles: ['admin', 'teacher', 'student']},
    children: [
      { path: 'edit', component: CourseEditComponent , outlet: 'courseSection'},
      { path: 'home', component: CourseHomeComponent , outlet: 'courseSection'},
      { path: 'teachers', component: AdminUserComponent , outlet: 'courseSection'},
      { path: 'students', component: AdminQuestionComponent , outlet: 'courseSection'},
      { path: 'documents', component: DocumentsComponent , outlet: 'courseSection'},
      { path: 'sequences', component: CourseSequenceComponent , outlet: 'courseSection'}
    ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
