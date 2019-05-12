import {LoaderService} from '../interceptor/httpconfig.interceptor.';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MEnrolement, RCourse, RNews, RQuestion, RSequence, RUser} from '../models/modelClasses';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Course, News} from '../models/modelInterfaces';
import {Observable} from 'rxjs';

export class MockUserService {

     user: RUser;
     course: RCourse;
     sequence: RSequence;
     enrolement: MEnrolement;


    constructor() {
     this.user = new RUser();
     this.user.local = {firstName: 'Test', lastName: 'McTesty', username: 'tester', email: 'test@test.com',
          password: 'test', admin: false, userType: 'student',
          organisation: 'BigSchool' , location: 'Sweden', meta: { age: 45 , website: 'https://test.com' }};

     this.course = new RCourse();

      this.course._id = '68768678';
      this.course.courseTitle = 'TestCourse';
      this.course.courseDescription = 'TestCourse';
      this.course.creatorID = '34344445';
      this.course.courseSummary = 'TestCourse';
      this.course.sequences = ['465444', '456654'];

      this.sequence = new RSequence();

      this.sequence._id= '343333';
      this.sequence.sequenceTitle = 'Test Sequence';
      this.sequence.sequenceDescription = 'Test Sequence';
      this.sequence.questions = ['2222222', '23322222'];

    this.enrolement = new MEnrolement();
    this.enrolement._id = 'EnrolID';
    this.enrolement.courseID = 'Test Course ID';
    this.enrolement.role = ' student';
    this.enrolement.userID = 'Test User ID';
    }

    getCurrentUser() {
      return this.user;
    }

    getCurrentCourse() {
    return this.course;
  }

    setCurrentSequence(){
      return this.sequence;
    }

    getCurrentSequence(){
      return this.sequence;
    }

    getEnrolementsForUsers() {

      return new Observable((observer) => {

        observer.next(this.enrolement);
        observer.complete();
      });
    }
}

export class MockCourseSequenceQuestionService  {
  course: RCourse;
  sequence: RSequence;
  question: RQuestion;

  constructor() {
    this.course = new RCourse();

    this.sequence = new RSequence();
    this.question = new RQuestion();

    this.course._id = '68768678';
    this.course.courseTitle = 'TestCourse';
    this.course.courseDescription = 'TestCourse';
    this.course.creatorID = '34344445';
    this.course.courseSummary = 'TestCourse';
    this.course.sequences = ['465444', '456654'];

    }

  getAllCourses(){

    const courseObservable = new Observable((observer) => {

      const courses = [];
      courses.push(this.course);
      courses.push(this.course);
      observer.next(courses);
      observer.complete();
    });


    return courseObservable;
}

  getCourseByID() {
    const courseObservable = new Observable((observer) => {

      observer.next(this.course);
      observer.complete();
    });

    return courseObservable;
  }



}

export class MockDataService  {

  constructor() {

  }


  getSequences() {

    return new Observable((observer) => {

      let sequence = new RSequence();
      sequence._id = 'Test ID';
      sequence.sequenceDescription = 'Example description';
      sequence.sequenceTitle = 'Example title';
      sequence.questions = ['11111111','111111111'];
      sequence.creatorID = '3333333';

      let seqArray = [];
      seqArray.push(sequence);
      seqArray.push(sequence);


      observer.next(seqArray);
      observer.complete();
    });

  }

  getNews(){

    return new Observable((observer) => {

      let news = new RNews();
      news._id = 'Test ID';
      news.content = 'Example content';
      news.courseID = 'Test Course ID';
      news.title = 'Example title';
      news.owner = {id: 'Test owner id', firstName: 'Test Firstname', lastName: ' Test Lastname'};


      observer.next(news);
      observer.complete();
    });
  }
}
export class MockLoaderService extends LoaderService {

}
