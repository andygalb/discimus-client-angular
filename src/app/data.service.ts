import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ICourseDocument, ICourse, IQuestion, ISequence, IUser, INews, IMessage, IEnrolement} from './models/modelInterfaces';
import {Settings} from './settings';
import config from './config.json';
import {Enrolement} from './models/modelClasses';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getNews(courseID: String) {
    return this.http.get<INews[]>(config.serverAddress + '/api/news/course/' + courseID);
  }

  getMessages(userID: String) {
    return this.http.get<IMessage[]>(config.serverAddress + '/api/message/user/' + userID);
  }

  getMessage(messageID: String) {
    return this.http.get<IMessage>(config.serverAddress + '/api/message/' + messageID);
  }

  getCourse(id: String) {
    return this.http.get<ICourse>(config.serverAddress + '/api/course/' + id);
  }

  getCourses() {
    return this.http.get<ICourse[]>(config.serverAddress + '/api/course/all');
  }

  getEnrolementsForUser(id) {
    return this.http.get<IEnrolement[]>(config.serverAddress + '/api/enrolement/user/' + id);
  }

  getUsersForCourse(courseID) {
    return this.http.get<IUser[]>(config.serverAddress + '/api/coursep/' + courseID + '/users');
  }


  getQuestions() {
    return this.http.get<IQuestion[]>(config.serverAddress + '/api/question/all');
  }

  getSequences() {
    return this.http.get<ISequence[]>(config.serverAddress + '/api/sequence/all');
  }

  getSequencesForCourse(courseID) {
    return this.http.get<ISequence[]>(config.serverAddress + '/api/sequence/course/' + courseID);
  }

  getThing<T>(id: String, type: String) {
  return this.http.get<T>(config.serverAddress + '/api/' + type + '/' + id);
  }

  getUsers() {
    return this.http.get<IUser[]>(config.serverAddress + '/api/user/all');
  }

  getAllDocuments() {
    return this.http.get<Document[]>(config.serverAddress + '/api/document/all');
  }

  getAllDocumentsForCourse(id: String) {
    return this.http.get<ICourseDocument[]>(config.serverAddress + '/api/document/course/' + id);
  }

  getDocumentByID(id: String) {
    return this.http.get<ICourseDocument>(config.serverAddress + '/api/document/' + id);
  }

  addDocument(document: ICourseDocument) {
    return this.http.put<String>(config.serverAddress + '/api/document', JSON.stringify(Document), httpOptions);
  }

  deleteDocument(document: ICourseDocument) {
    return this.http.delete<String>(config.serverAddress + '/api/document/' + document._id, httpOptions);
  }

  enroleUserOnCourse(courseID, userID, role) {

    const enrolement = new Enrolement();
    enrolement.courseID = courseID;
    enrolement.role = role;
    enrolement.userID = userID;

    return this.http.post<any>(config.serverAddress + '/api/enrolement', JSON.stringify(enrolement), httpOptions);
  }

  unenroleUserFromCourse(enrolementID) {
    return this.http.delete<any>(config.serverAddress + '/api/enrolement/' + enrolementID, httpOptions);
  }

}
