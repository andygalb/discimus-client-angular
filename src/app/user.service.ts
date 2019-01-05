import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Result, User} from './models/modelInterfaces';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RUser} from './models/modelClasses';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class UserService {

  user: RUser = new RUser();
  isUserLoggedIn = false;
  router: Router;
  currentCourseID: string;
  currentCourseTitle: string;
  currentSequenceID: string;
  currentSequenceTitle: string;
  currentQuestionID: string;
  currentQuestionTitle: string;
  serverAddress = 'https://ltc-server.herokuapp.com';

  constructor(private http: HttpClient, router: Router) {
    this.router = router;
  }

  loginUser(user: User) {
    console.log(user);
    return this.http.post<User>(this.serverAddress + '/api/user/login/', JSON.stringify(user), httpOptions);
  }

  initiateUser(user: User) {
    this.user = user;
  }

  logOut(): void {
    this.user = null;
    this.isUserLoggedIn = false;
    this.router.navigate(['home']);
  }

  getCurrentUser(): User {
    return this.user;
  }

  addCorrectAnswer(questionID: string, answer: string): any {
    let result: Result = new Result;
    result._id = questionID;
    result.type = 'question';
    result.dateTime = Date.now();
    result.answer = answer;
    result.courseID = this.currentCourseID;
    result.courseTitle = this.currentCourseTitle;
    result.sequenceID = this.currentSequenceID;
    result.sequenceTitle = this.currentSequenceTitle;
    result.questionID = this.currentQuestionID;
    result.questionTitle = this.currentQuestionTitle;

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
        return true; }
    );
  }

  updateUserResultsInDatabase() {
    return this.http.post(this.serverAddress + '/api/user/results/',{'_id': this.user._id, 'results': this.user.results}, httpOptions);
  }

  hasUserAlreadyAnsweredQuestion(questionID: string): boolean {

    let alreadyAnsweredQuestion = false;
    for(let i = 0; i < this.user.results.length; i++) {
      if(this.user.results[i]._id === questionID) {
        alreadyAnsweredQuestion = true;
        break;
      }
    }
    return alreadyAnsweredQuestion;
  }

}
