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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MockDataService, MockUserService} from '../../mocks/mocks';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../data.service';
class MockCourseSequenceQuestionService extends CourseSequenceQuestionService {


}
describe('AdminSequenceComponent', () => {
  let component: AdminSequenceComponent;
  let fixture: ComponentFixture<AdminSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSequenceComponent],
      imports: [     BrowserAnimationsModule, RouterTestingModule, MatTableModule, MatCheckboxModule,
        HttpClientTestingModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatOptionModule, MatSelectModule],
      providers: [
        {provide: UserService, useClass: MockUserService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
        {provide: HttpClient, useClass: HttpClientTestingModule},
        {provide: DataService, useClass: MockDataService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSequenceComponent);
    // userService = TestBed.get(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
