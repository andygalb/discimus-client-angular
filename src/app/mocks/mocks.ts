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
import {MockFactory} from './mockFactory';
import {MessengerService} from '../messenger.service';

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
      this.course.courseSummary = '{"sequences" : "" }';
      this.course.sequences = ['465444', '456654'];

      this.sequence = new RSequence();

      this.sequence._id = '343333';
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
      return MockFactory.getMockUser();
    }

    getCurrentCourse() {
    return this.course;
  }

    setCurrentCourse() {

   }

    setCurrentSequence() {
      return this.sequence;
    }

    getCurrentSequence() {
      return this.sequence;
    }

  getCurrentQuestions() {
      const seqArray = [];
      seqArray.push(MockFactory.getMockQuestion());
      seqArray.push(MockFactory.getMockQuestion());
    return seqArray;
  }

  getEnrolementsForUser() {

      return new Observable((observer) => {

        observer.next(this.enrolement);
        observer.complete();
      });
    }

    getCurrentScoreForCourse() {
      return 5;
    }

  hasUserAlreadyAnsweredQuestion() {
      return false;
  }

  setCurrentQuestions() {

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

  getAllCourses() {

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

  getSequenceByID() {

    const sequenceObservable = new Observable((observer) => {

      observer.next(MockFactory.getMockSequence());
      observer.complete();
    });

    return sequenceObservable;

  }

 getMultipleSequences() {
    const seqArray = [];
    seqArray.push(MockFactory.getMockSequence());
   seqArray.push(MockFactory.getMockSequence());
   return new Observable((observer) => {
     observer.next(seqArray);
     observer.complete();
   });
 }

  getMultipleQuestions() {
    const quesArray = [];
    quesArray.push(MockFactory.getMockQuestion());
    quesArray.push(MockFactory.getMockQuestion());
    return new Observable((observer) => {
      observer.next(quesArray);
      observer.complete();
    });
  }

}

export class MockDataService  {

  constructor() {

  }

  getSequencesForCourse() {
    return this.getSequences();
  }

  getUsers() {
    return new Observable((observer) => {

      const userArray = [];
      userArray.push(MockFactory.getMockUser());
      userArray.push(MockFactory.getMockUser());
      observer.next(userArray);
      observer.complete();
    });
  }

  getUsersForCourse() {
    return new Observable((observer) => {

      const userArray = [];
      userArray.push(MockFactory.getMockUser());
      userArray.push(MockFactory.getMockUser());
      observer.next(userArray);
      observer.complete();
    });
  }

  getAllDocumentsForCourse() {

    return new Observable((observer) => {

      const documentArray = [];
      documentArray.push(MockFactory.getMockDocument());
      documentArray.push(MockFactory.getMockDocument());
      observer.next(documentArray);
      observer.complete();
    });

  }


  getSequences() {

    return new Observable((observer) => {

      const sequence = new RSequence();
      sequence._id = 'Test ID';
      sequence.sequenceDescription = 'Example description';
      sequence.sequenceTitle = 'Example title';
      sequence.questions = ['11111111', '111111111'];
      sequence.creatorID = '3333333';

      const seqArray = [];
      seqArray.push(sequence);
      seqArray.push(sequence);


      observer.next(seqArray);
      observer.complete();
    });
  }


  getQuestions() {

    return new Observable((observer) => {

      const quesArray = [];
      quesArray.push(MockFactory.getMockQuestion());
      quesArray.push(MockFactory.getMockQuestion());
      observer.next(quesArray);
      observer.complete();
    });
  }
    getCourse() {
      return new Observable((observer) => {

        const course = MockFactory.getMockCourse();
        observer.next(course);
        observer.complete();
      });
    }

  getCourses() {
    return new Observable((observer) => {

      const courseArray = [];
      courseArray.push(MockFactory.getMockCourse());
      courseArray.push(MockFactory.getMockCourse());
      observer.next(courseArray);
      observer.complete();
    });
  }


  getNews() {

    return new Observable((observer) => {

      const news = new RNews();
      news._id = 'Test ID';
      news.content = 'Example content';
      news.courseID = 'Test Course ID';
      news.title = 'Example title';
      news.owner = {id: 'Test owner id', firstName: 'Test Firstname', lastName: ' Test Lastname'};

      const newsArray = [];
      newsArray.push(news);

      observer.next(newsArray);
      observer.complete();
    });
  }
  getEnrolementsForUser() {
    const enroleArray = [];
    enroleArray.push(MockFactory.getMockEnrolement());
    enroleArray.push(MockFactory.getMockEnrolement());
    return new Observable((observer) => {
      observer.next(enroleArray);
      observer.complete();
    });
  }

}

export class MockLoaderService extends LoaderService {

}

export class MockMessengerService {

  getMessages() {
    const messArray = [];
    messArray.push(MockFactory.getMockMessage());
    messArray.push(MockFactory.getMockMessage());
    return new Observable((observer) => {
      observer.next(messArray);
      observer.complete();
    });
  }

  getReceivedMessages() {
    const messArray = [];
    messArray.push(MockFactory.getMockMessage());
    messArray.push(MockFactory.getMockMessage());
    return new Observable((observer) => {
      observer.next(messArray);
      observer.complete();
    });
  }

  checkForNewMessages() {
    const messArray = [];
    messArray.push(MockFactory.getMockMessage());
    messArray.push(MockFactory.getMockMessage());
    return new Observable((observer) => {
      observer.next(messArray);
      observer.complete();
    });
  }

  markMessageAsRead() {}

  getSystemUsers() {
    const userArray = [];
    userArray.push(MockFactory.getMockUser());
    userArray.push(MockFactory.getMockUser());
    return new Observable((observer) => {
      observer.next(userArray);
      observer.complete();
    });

  }

}
