import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseSearchComponent} from './course-search.component';
import {MatCardModule, MatFormFieldModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {TruncatePipe} from '../truncate.pipe';
import {UserService} from '../user.service';
import {MockCourseSequenceQuestionService, MockUserService} from '../mocks/mocks';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSearchComponent, TruncatePipe],
      imports: [RouterTestingModule, HttpClientTestingModule, MatCardModule, MatFormFieldModule],
      providers: [TruncatePipe,
        {provide: UserService, useClass: MockUserService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
