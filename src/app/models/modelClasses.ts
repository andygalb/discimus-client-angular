import {CourseDocument, Course, Question, Result, Sequence, User, News, Message, Enrolement} from './modelInterfaces';

export class RUser implements User {
  _id: String;
  local: { firstName: String; lastName: String; username: String; email: String; password: String; admin: Boolean; userType: String; organisation: String; location: String; meta: { age: Number; website: String } };
  facebook: { id: String; token: String; email: String; name: String };
  azure: { id: String; token: String; email: String; name: String; givenName: String; familyName: String };
  results: Result[];
};

export class RCourse implements Course {
  _id: String;
  courseTitle: String;
  courseDescription: String;
  creatorID: String;
  courseSummary: string;
  sequences: String[];
  created_at: { type: Date; required: true };
  updated_at: { type: Date; required: true };
}

export class RMessage implements Message {
  fromID: String;
  fromName: String;
  toID: String;
  title: String;
  content: String;
  created_at: {type: Date, required: true};
  updated_at: {type: Date, required: true};
}

export class RDocument implements CourseDocument {
  _id: String;
  owner: String;
  course: String;
  originalFilename: String;
  created_at: {type: Date, required: true};
  updated_at: {type: Date, required: true};
}

export class RNews implements News {
  _id: String;
  owner: {
    id: string;
    firstName: string;
    lastName: string;
  } ;
  ownerName: String;
  courseID: String;
  title: String;
  content: String;
  created_at: {type: Date, required: true};
}


export class RSequence implements Sequence {
  _id: string;
  sequenceTitle: string;
  sequenceDescription: string;
  creatorID: string;
  questions: string[];
  created_at: { type: Date; required: true; default };
  updated_at: { type: Date; required: true };
}

export class RQuestion implements Question {

  constuctor() {
    this.questionAnswer =  {text: '', javascript: '', csharp: ''};
  }
  _id: string;
  title: string;
  text: string;
  type: string;
  creatorID: string;
  questionInput: string;
  questionAnswer: { text: string; javascript: string; csharp: string };
  userAnswer? : string;
  userResponse?: string;
  created_at: { type: Date; required: true };
  updated_at: { type: Date; required: true };
}

export class QuestionMetaData {
  constuctor() {
    this.inputs = '';
    this.outputs = '';
  }
  inputs: String;
  outputs: String;
}

export class DialogMetaData {
  constructor(titleText, okButtonText, type) {
    this.titleText = titleText;
    this.okButtonText = okButtonText;
    this.type = type;
  }

  titleText: String;
  okButtonText: String;
  type: String;
}

export class MEnrolement implements Enrolement {
  courseID: String;
  userID: String;
  role: String;
  created_at: {type: Date};
  updated_at: {type: Date};
}

