import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {MockCourseSequenceQuestionService, MockUserService} from './mocks/mocks';
import {CourseSequenceQuestionService} from './course-sequence-question.service';
import {Router} from '@angular/router';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: UserService, useClass: MockUserService},
      {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
      {provide: Router}]

  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
