import { Injectable } from '@angular/core';
import {Course, Question, Sequence} from './models/modelInterfaces';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class CourseSequenceQuestionService {
  //serverAddress = 'https://ltc-project.herokuapp.com';
  serverAddress = 'https://ltc-server.herokuapp.com';

  constructor(private http: HttpClient) {}

  currentCourse: Course;
  currentSequence: Sequence;
  currentQuestion: Question;

   getAllQuestions() {
   return this.http.get<Question[]>(this.serverAddress + '/api/question/all');
   }

  getAllCourses() {
    return this.http.get<Course[]>(this.serverAddress + '/api/course/all');
  }

  getCourseByID(id: number) {
    return this.http.get<Course>(this.serverAddress + '/api/course/' + id);
  }

  addCourse(course: Course) {
    return this.http.put<String>(this.serverAddress + '/api/course', JSON.stringify(course), httpOptions);
  }

  updateCourse(course: Course) {
    return this.http.post<String>(this.serverAddress + '/api/course/' + course._id, JSON.stringify(course), httpOptions);
  }

  deleteCourse(course: Course) {
    return this.http.delete<String>(this.serverAddress + '/api/course/' + course._id, httpOptions);
  }

  deleteSequence(sequence: Sequence) {
    return this.http.delete<String>(this.serverAddress + '/api/sequence/' + sequence._id, httpOptions);
  }

  addSequence(sequence: Sequence) {
    return this.http.put<JSON>(this.serverAddress + '/api/sequence', JSON.stringify(sequence), httpOptions);
  }

  updateSequence(sequence: Sequence) {
    return this.http.post<string>(this.serverAddress + '/api/sequence/' + sequence._id, JSON.stringify(sequence), httpOptions);
  }

  getResourceByID<T>(id: string, type: string) {
    return this.http.get<T>( `${this.serverAddress}/api/${type}/id`, httpOptions);
  }

  getSequenceByID(id: number) {
    return this.http.get<Sequence>(this.serverAddress + '/api/sequence/' + id, httpOptions);
  }


  getMultipleSequences(sequences: String[]) {
    const objectToSend = {sequences: sequences};
    return this.http.post<Sequence[]>(this.serverAddress + '/api/multiple/sequences', JSON.stringify(objectToSend), httpOptions);
  }

    deleteQuestion(id: String) {
      return this.http.delete<string>(this.serverAddress + '/api/question/' + id, httpOptions);
    }

   getQuestionByID(id: string) {
     return this.http.get(this.serverAddress + '/api/question/'+id,httpOptions);
   }

    addQuestion(question: Question) {
      return this.http.post<string>(this.serverAddress + '/api/question', JSON.stringify(question), httpOptions);
    }

    updateQuestion(question: Question) {
      return this.http.put<string>(this.serverAddress + '/api/question/' + question._id, JSON.stringify(question), httpOptions);
    }

    getMultipleQuestions(questions: string[]) {
      const objectToSend = {questions: questions};
      return this.http.post<Question[]>(this.serverAddress + '/api/multiple/questions', JSON.stringify(objectToSend), httpOptions);
    }

  isAnswerCorrect(question: Question, givenAnswer: string): boolean {

    let isCorrect:boolean = false;
    if(question.questionAnswer.text === givenAnswer) {isCorrect = true; }
    return isCorrect;
  }


}
