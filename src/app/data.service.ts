import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CourseDocument, Course, Question, Sequence, User, News, Message, Enrolement} from './models/modelInterfaces';
import {Settings} from './settings';
import config from './config.json';
import {MEnrolement} from './models/modelClasses';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getNews(courseID: String) {
    return this.http.get<News[]>(config.serverAddress + '/api/news/course/' + courseID);
  }

  getMessages(userID: String) {
    return this.http.get<Message[]>(config.serverAddress + '/api/message/user/' + userID);
  }

  getMessage(messageID: String) {
    return this.http.get<Message>(config.serverAddress + '/api/message/' + messageID);
  }

  getCourse(id: String) {
    return this.http.get<Course>(config.serverAddress + '/api/course/' + id);
  }

  getCourses() {
    return this.http.get<Course[]>(config.serverAddress + '/api/course/all');
  }

  getEnrolementsForUser(id) {
    return this.http.get<Enrolement[]>(config.serverAddress + '/api/enrolement/user/' + id);
  }


  getQuestions() {
    return this.http.get<Question[]>(config.serverAddress + '/api/question/all');
  }

  getSequences() {
    return this.http.get<Sequence[]>(config.serverAddress + '/api/sequence/all');
  }

  getSequencesForCourse(courseID) {
    return this.http.get<Sequence[]>(config.serverAddress + '/api/sequence/' + courseID);
  }

  getUsers() {
    return this.http.get<User[]>(config.serverAddress + '/api/user/all');
  }

  getAllDocuments() {
    return this.http.get<Document[]>(config.serverAddress + '/api/document/all');
  }

  getAllDocumentsForCourse(id: String) {
    return this.http.get<CourseDocument[]>(config.serverAddress + '/api/document/course/' + id);
  }

  getDocumentByID(id: String) {
    return this.http.get<CourseDocument>(config.serverAddress + '/api/document/' + id);
  }

  addDocument(document: CourseDocument) {
    return this.http.put<String>(config.serverAddress + '/api/document', JSON.stringify(Document), httpOptions);
  }

  deleteDocument(document: CourseDocument) {
    return this.http.delete<String>(config.serverAddress + '/api/document/' + document._id, httpOptions);
  }

  enroleUserOnCourse(courseID, userID, role){
    let enrolement = new MEnrolement();
    enrolement.courseID = courseID;
    enrolement.role = role;
    enrolement.userID = userID;

    return this.http.post<any>(config.serverAddress + '/api/enrolement', JSON.stringify(enrolement), httpOptions);
  }

}
