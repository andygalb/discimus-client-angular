import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminSequenceComponent} from './admin-sequence.component';
import {
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatOptionModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Route, RouterModule} from '@angular/router';
import {UserService} from '../../user.service';
import {RouterTestingModule} from '@angular/router/testing';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {User} from '../../models/modelInterfaces';
import {RUser} from '../../models/modelClasses';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

class MockUserService extends UserService {


}

class MockCourseSequenceQuestionService extends CourseSequenceQuestionService {


}
describe('AdminSequenceComponent', () => {
  let component: AdminSequenceComponent;
  let fixture: ComponentFixture<AdminSequenceComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSequenceComponent],
      imports: [     BrowserAnimationsModule, RouterTestingModule, MatTableModule, MatCheckboxModule, HttpClientTestingModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatOptionModule, MatSelectModule],
      providers: [
        {provide: UserService, useClass: MockUserService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSequenceComponent);
    userService = TestBed.get(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
