import {Injectable} from '@angular/core';
import {ICourse, INews, IQuestion, IQuestionResponse, ISequence} from './models/modelInterfaces';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import config from './config.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CourseSequenceQuestionService {

  constructor(private http: HttpClient) {
  }

  currentCourse: ICourse;
  currentSequence: ISequence;
  currentQuestion: IQuestion;

  getAllQuestions() {
    return this.http.get<IQuestion[]>(config.serverAddress + '/api/question/all');
  }

  getAllCourses() {
    return this.http.get<ICourse[]>(config.serverAddress + '/api/course/all');
  }

  getCourseByID(id) {
    return this.http.get<ICourse>(config.serverAddress + '/api/course/' + id);
  }

  addCourse(course: ICourse) {
    return this.http.post<String>(config.serverAddress + '/api/course', JSON.stringify(course), httpOptions);
  }

  updateCourse(course: ICourse) {
    return this.http.put<String>(config.serverAddress + '/api/course/' + course._id, JSON.stringify(course), httpOptions);
  }

  deleteCourse(course: ICourse) {
    return this.http.delete<String>(config.serverAddress + '/api/course/' + course._id, httpOptions);
  }

  deleteCourseByID(courseID: string) {
    return this.http.delete<string>(config.serverAddress + '/api/course/' + courseID, httpOptions);
  }

  addNews(news: INews) {
    return this.http.post<String>(config.serverAddress + '/api/news', JSON.stringify(news), httpOptions);
  }

  deleteSequence(sequence: ISequence) {
    return this.http.delete<String>(config.serverAddress + '/api/sequence/' + sequence._id, httpOptions);
  }

  addSequence(sequence: ISequence) {
    return this.http.post<JSON>(config.serverAddress + '/api/sequence', JSON.stringify(sequence), httpOptions);
  }

  addSequenceToCourse(sequenceID: String, courseID: String) {
    const content = {
      sequenceID: sequenceID,
      courseID: courseID
    };
    return this.http.post<JSON>(config.serverAddress + '/api/course/sequence', JSON.stringify(content), httpOptions);
  }

  updateSequence(sequence: ISequence) {
    return this.http.put<string>(config.serverAddress + '/api/sequence/' + sequence._id, JSON.stringify(sequence), httpOptions);
  }

  getResourceByID<T>(id: string, type: string) {
    return this.http.get<T>(`${config.serverAddress}/api/${type}/id`, httpOptions);
  }

  getSequenceByID(id: number) {
    return this.http.get<ISequence>(config.serverAddress + '/api/sequence/' + id, httpOptions);
  }

  getMultipleSequences(sequences: String[]) {
    const objectToSend = {sequences: sequences};
    return this.http.post<ISequence[]>(config.serverAddress + '/api/multiple/sequences', JSON.stringify(objectToSend), httpOptions);
  }

  deleteQuestion(id: String) {
    return this.http.delete<string>(config.serverAddress + '/api/question/' + id, httpOptions);
  }

  getQuestionByID(id: string) {
    return this.http.get<IQuestion>(config.serverAddress + '/api/question/' + id, httpOptions);
  }

  addQuestion(question: IQuestion) {
    return this.http.post<string>(config.serverAddress + '/api/question', JSON.stringify(question), httpOptions);
  }

  updateQuestion(question: IQuestion) {
    return this.http.put<string>(config.serverAddress + '/api/question/' + question._id, JSON.stringify(question), httpOptions);
  }

  getMultipleQuestions(questions: string[]) {

    const objectToSend = {questions: questions};
    return this.http.post<IQuestion[]>(config.serverAddress + '/api/multiple/questions', JSON.stringify(objectToSend), httpOptions);
  }

  isAnswerCorrect(question: IQuestion, givenAnswer: string) {
    return this.submitAnswerToServer(question, givenAnswer);
  }

  submitAnswerToServer(question: IQuestion, submittedAnswer: string) {
    console.log('Submitting question to server');
    const objectToSend = {
      question: question,
      submittedAnswer: submittedAnswer
    };
    return this.http.post<IQuestionResponse>(config.serverAddress + '/api/test/submit', JSON.stringify(objectToSend), httpOptions);
  }


}
