import {LoaderService} from '../interceptor/httpconfig.interceptor.';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {RUser} from '../models/modelClasses';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

export class MockUserService {

     user: RUser;

    constructor() {
     this.user = new RUser();
     this.user.local = {firstName: 'Test', lastName: 'McTesty', username: 'tester', email: 'test@test.com',
          password: 'test', admin: false, userType: 'student',
          organisation: 'BigSchool' , location: 'Sweden', meta: { age: 45 , website: 'https://test.com' }};
    }

    getCurrentUser() {
      return this.user;
    }
}

export class MockCourseSequenceQuestionService  {

}

export class MockDataService  {
  getSequences() {

  }
}
export class MockLoaderService extends LoaderService {

}
