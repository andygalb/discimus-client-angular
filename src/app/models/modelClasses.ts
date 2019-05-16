import {ICourseDocument, ICourse, IQuestion, IResult, ISequence, IUser, INews, IMessage, IEnrolement} from './modelInterfaces';

export class User implements IUser {
  _id: String;
  local: { firstName: String; lastName: String; username: String; email: String;
  password: String; admin: Boolean; userType: String; organisation: String; location: String; meta: { age: Number; website: String } };
  facebook: { id: String; token: String; email: String; name: String };
  azure: { id: String; token: String; email: String; name: String; givenName: String; familyName: String };
  results: IResult[];
}

export class Course implements ICourse {
  _id: String;
  courseTitle: String;
  courseDescription: String;
  creatorID: String;
  courseSummary: string;
  sequences: String[];
  created_at: { type: Date; required: true };
  updated_at: { type: Date; required: true };
}

export class Message implements IMessage {
  _id: String;
  fromID: String;
  fromName: String;
  toID: String;
  title: String;
  senderFirstName: String;
  senderLastName: String;
  recipientFirstName: String;
  recipientLastName: String;
  read: Boolean;
  content: String;
  created_at: { type: Date, required: true };
  updated_at: { type: Date, required: true };
}

export class CourseDocument implements ICourseDocument {
  _id: String;
  owner: String;
  course: String;
  originalFilename: String;
  created_at: { type: Date, required: true };
  updated_at: { type: Date, required: true };
}

export class News implements INews {
  _id: String;
  owner: {
    id: String;
    firstName: String;
    lastName: String;
  };
  ownerName: String;
  courseID: String;
  title: String;
  content: String;
  created_at: { type: Date, required: true };
}


export class Sequence implements ISequence {
  _id: string;
  sequenceTitle: string;
  sequenceDescription: string;
  creatorID: string;
  questions: string[];
  created_at: { type: Date; required: true; default };
  updated_at: { type: Date; required: true };
}

export class Question implements IQuestion {

  constructor() {
    this.questionAnswer = {text: '', javascript: '', csharp: ''};
  }

  _id: string;
  title: string;
  text: string;
  type: string;
  creatorID: string;
  questionInput: string;
  questionAnswer: { text: string; javascript: string; csharp: string };
  userAnswer?: string;
  userResponse?: string;
  created_at: { type: Date; required: true };
  updated_at: { type: Date; required: true };
}

export class QuestionMetaData {
  constructor() {
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

export class Enrolement implements IEnrolement {
  _id: String;
  courseID: String;
  userID: String;
  role: String;
  created_at: { type: Date };
  updated_at: { type: Date };
}

