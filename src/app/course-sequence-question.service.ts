import { Injectable } from '@angular/core';
import {Course, News, Question, QuestionResponse, Sequence} from './models/modelInterfaces';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import config from './config.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class CourseSequenceQuestionService {

  constructor(private http: HttpClient) {}

  currentCourse: Course;
  currentSequence: Sequence;
  currentQuestion: Question;

   getAllQuestions() {
   return this.http.get<Question[]>(config.serverAddress + '/api/question/all');
   }

  getAllCourses() {
    return this.http.get<Course[]>(config.serverAddress + '/api/course/all');
  }

  getCourseByID(id) {
    return this.http.get<Course>(config.serverAddress + '/api/course/' + id);
  }

  addCourse(course: Course) {
    return this.http.post<String>(config.serverAddress + '/api/course', JSON.stringify(course), httpOptions);
  }

  updateCourse(course: Course) {
    return this.http.put<String>(config.serverAddress + '/api/course/' + course._id, JSON.stringify(course), httpOptions);
  }

  deleteCourse(course: Course) {
    return this.http.delete<String>(config.serverAddress + '/api/course/' + course._id, httpOptions);
  }

  deleteCourseByID(courseID: string) {
    return this.http.delete<string>(config.serverAddress + '/api/course/' + courseID, httpOptions);
  }

  addNews(news: News) {
    return this.http.post<String>(config.serverAddress + '/api/news', JSON.stringify(news), httpOptions);
  }

  deleteSequence(sequence: Sequence) {
    return this.http.delete<String>(config.serverAddress + '/api/sequence/' + sequence._id, httpOptions);
  }

  addSequence(sequence: Sequence) {
    return this.http.post<JSON>(config.serverAddress + '/api/sequence', JSON.stringify(sequence), httpOptions);
  }

  addSequenceToCourse(sequenceID: String, courseID: String) {
     const content = {
       sequenceID: sequenceID,
       courseID: courseID
     };
    return this.http.post<JSON>(config.serverAddress + '/api/course/sequence', JSON.stringify(content), httpOptions);
  }

  updateSequence(sequence: Sequence) {
    return this.http.put<string>(config.serverAddress + '/api/sequence/' + sequence._id, JSON.stringify(sequence), httpOptions);
  }

  getResourceByID<T>(id: string, type: string) {
    return this.http.get<T>( `${config.serverAddress}/api/${type}/id`, httpOptions);
  }

  getSequenceByID(id: number) {
    return this.http.get<Sequence>(config.serverAddress + '/api/sequence/' + id, httpOptions);
  }

  getMultipleSequences(sequences: String[]) {
    const objectToSend = {sequences: sequences};
    return this.http.post<Sequence[]>(config.serverAddress + '/api/multiple/sequences', JSON.stringify(objectToSend), httpOptions);
  }

    deleteQuestion(id: String) {
      return this.http.delete<string>(config.serverAddress + '/api/question/' + id, httpOptions);
    }

   getQuestionByID(id: string) {
     return this.http.get<Question>(config.serverAddress + '/api/question/' + id, httpOptions);
   }

    addQuestion(question: Question) {
      return this.http.post<string>(config.serverAddress + '/api/question', JSON.stringify(question), httpOptions);
    }

    updateQuestion(question: Question) {
      return this.http.put<string>(config.serverAddress + '/api/question/' + question._id, JSON.stringify(question), httpOptions);
    }

    getMultipleQuestions(questions: string[]) {

      const objectToSend = {questions: questions};
      return this.http.post<Question[]>(config.serverAddress + '/api/multiple/questions', JSON.stringify(objectToSend), httpOptions);
    }

  isAnswerCorrect(question: Question, givenAnswer: string) {
    return this.submitAnswerToServer(question, givenAnswer);
  }

  submitAnswerToServer(question:Question, submittedAnswer: string) {
     console.log("Submitting question to server");
    const objectToSend = {
      question: question,
      submittedAnswer: submittedAnswer};
    return this.http.post<QuestionResponse>(config.serverAddress + '/api/test/submit', JSON.stringify(objectToSend), httpOptions);
  }


}
