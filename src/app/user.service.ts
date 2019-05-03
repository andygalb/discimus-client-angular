import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Course, Enrolement, Question, Result, Sequence, User} from './models/modelInterfaces';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RUser} from './models/modelClasses';
import config from './config.json';
import {CourseSequenceQuestionService} from './course-sequence-question.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class UserService {

  user: RUser = new RUser();
  isUserLoggedIn = false;
  courses: Course[];
  enrolements: Enrolement[];
  router: Router;
  currentCourse: Course;
  currentSequence: Sequence;
  currentQuestion: Question;
  currentCourseID: string;
  currentCourseTitle: string;
  currentSequenceID: string;
  currentSequenceTitle: string;
  currentQuestionID: string;
  currentQuestionTitle: string;
  serverAddress = config.serverAddress;

  constructor(private http: HttpClient, router: Router, private courseSequenceQuestionService: CourseSequenceQuestionService) {
    this.router = router;
    this.courses = [];
  }

  loginUser(user: User) {
    console.log(user);
    return this.http.post(this.serverAddress + '/api/auth/local/', {'username' : user.local.username, 'password' : user.local.password});
  }

  initiateUser(user: User) {
    this.user = user;
  }

  setCurrentCourse(course: Course){
    console.log("Current course was just set");
    console.log(course);
    this.currentCourse = course;
    localStorage.setItem('currentCourse', JSON.stringify(course));
  }

  getCurrentCourse(){
  //  let course = JSON.parse(localStorage.getItem('currentCourse'));
    if (this.currentCourse == null) {
      let course = JSON.parse(localStorage.getItem('currentCourse'));
      return course;
    }
    else {return this.currentCourse;}
  }

  setCurrentSequence(sequence){
    localStorage.setItem('currentSequence', JSON.stringify(sequence));
  }

  getCurrentSequence(){
    let sequence= JSON.parse(localStorage.getItem('currentSequence'));
    return sequence;
  }

  setCurrentQuestions(questions: Question[]){
    localStorage.setItem('currentQuestions', JSON.stringify(questions));
  }

  getCurrentQuestions(){
    let questions = JSON.parse(localStorage.getItem('currentQuestions'));
    return questions;
  }


  getEnrolementsForUser() {
    this.http.get<Enrolement[]>(config.serverAddress + '/api/enrolement/user/' + this.getCurrentUser()._id).subscribe((enrolements) => {
        this.enrolements = enrolements;
        this.getCoursesForUser();
      },
      (err) => {console.log(err);}
    );
  }

  getCoursesForUser() {
      this.courses=[];
    for (let i = 0; i < this.enrolements.length; i++) {
      this.courseSequenceQuestionService.getCourseByID(this.enrolements[i].courseID).subscribe(data => {
          this.courses.push(data);
        },
        (err) => {
          console.log("Error fetching course:"+ err);
        }
      );
    }
  }

  getCurrentScoreForCourse(courseID){
    let userResults = this.getCurrentUser().results;

    let score = 0;

    for(var result of userResults){
      if (result.courseID === courseID) {score++;}
    }
    return score;
  }

  logOut(): void {
    this.user = null;
    this.isUserLoggedIn = false;
    this.courses = [];
    localStorage.clear();
    this.router.navigate(['login']).catch(reason => {console.log("Could not navigate to home:" + reason);});
  }

  getCurrentUser(): User {
    return this.user;
  }

  addCorrectAnswer(question: Question, answer: string): any {

    const course = this.getCurrentCourse();
    const sequence  = this.getCurrentSequence();
    const result: Result = new Result;
    result.questionID = question._id;
    result.questionTitle = question.title;
    result.type = question.type;
    result.answer = answer;
    result.courseID = course._id;
    result.courseTitle = course.courseTitle;
    result.sequenceID = sequence._id;
    result.sequenceTitle = sequence.sequenceTitle;
    result.dateTime = Date.now();


    console.log("This is the result that has been created:");
    console.log(result);

    this.user.results.push(result);


    this.updateUserResultsInDatabase().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.error('Error updating user results!');
      //  return Observable.throw(err);
      },
      () => {
        //Must also update users results locally....
        return true; }
    );
  }

  updateUserResultsInDatabase() {
    return this.http.post(this.serverAddress + '/api/user/results/',{'_id': this.user._id, 'results': this.user.results}, httpOptions);
  }

  hasUserAlreadyAnsweredQuestion(questionID: string): boolean {

    let alreadyAnsweredQuestion = false;
    for(let i = 0; i < this.user.results.length; i++) {
      if(this.user.results[i].questionID === questionID) {
        alreadyAnsweredQuestion = true;
        break;
      }
    }
    return alreadyAnsweredQuestion;
  }

}
