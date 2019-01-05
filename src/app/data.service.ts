import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course, Question, Sequence, User} from './models/modelInterfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<Course[]>('https://ltc-server.herokuapp.com/api/course/all');
  }

  getCourse(id: String) {
    return this.http.get<Course>('https://ltc-server.herokuapp.com/api/course/' + id);
  }

  getQuestions() {
    return this.http.get<Question[]>('https://ltc-server.herokuapp.com/api/question/all');
  }

  getSequences() {
    return this.http.get<Sequence[]>('https://ltc-server.herokuapp.com/api/sequence/all');
  }

  getUsers() {
    return this.http.get<User[]>('https://ltc-server.herokuapp.com/api/user/all');
  }


}
