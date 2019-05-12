import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsComponent} from './news.component';
import {MatCardModule, MatDialogModule, MatIconModule} from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {MockCourseSequenceQuestionService, MockUserService} from '../mocks/mocks';
import {UserService} from '../user.service';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsComponent],
      imports: [MatIconModule, MatCardModule, MatDialogModule, HttpClientTestingModule],
      providers: [{provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
        {provide: UserService, useClass: MockUserService}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
