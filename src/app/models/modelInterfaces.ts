export interface CourseDocument {
  _id: String;
  owner: String;
  course: String;
  originalFilename: String;
  created_at: { type: Date, required: true };
  updated_at: { type: Date, required: true };
}

export interface Course {
  _id: String;
  courseTitle: String;
  courseDescription: String;
  creatorID: String;
  courseSummary: string;
  sequences: String[];
  created_at: { type: Date, required: true };
  updated_at: { type: Date, required: true };
}

export interface News {
  _id: String;
  owner: {
    id: String;
    firstName: String;
    lastName: String;
  } ;
  courseID: String;
  title: String;
  content: String;
  created_at: { type: Date, required: true };
}

export interface Message {
  _id: String;
  fromID: String;
  fromName: String;
  senderFirstName: String;
  senderLastName: String;
  recipientFirstName: String;
  recipientLastName: String;
  toID: String;
  title: String;
  content: String;
  read: Boolean;
  created_at: { type: Date, required: true };
  updated_at: { type: Date, required: true };
}

export interface Question {
  _id: string;
  title: string;
  text: string;
  type: string;
  creatorID: string;
  questionInput?: string;
  questionAnswer: {
    text: string,
    javascript: string,
    csharp: string
  };
  userAnswer?: string;
  userResponse?: string;
  updated_at: { type: Date, required: true };
}

export class Result {
  _id: String;
  type: String;
  dateTime: number;
  answer: String;
  courseID: String;
  sequenceID: String;
  questionID: String;
  courseTitle: String;
  sequenceTitle: String;
  questionTitle: String;
}

export interface Sequence {
  _id: string;
  sequenceTitle: string;
  sequenceDescription: string;
  creatorID: string;
  questions: string[];
  created_at: { type: Date, required: true, default };
  updated_at: { type: Date, required: true };
}

export interface User {
  _id: String;
  local: {
    firstName: String;
    lastName: String;
    username: String;
    email: String;
    password: String;
    admin: Boolean;
    userType: String;
    organisation: String;
    location: String;
    meta: {
      age: Number;
      website: String;
    }
    // created_at: {type: Date, required: true, default: Date.now},
    // updated_at: {type: Date, required: true, default: Date.now}
  };
  facebook: {
    id: String;
    token: String;
    email: String;
    name: String;
  };
  azure: {
    id: String;
    token: String;
    email: String;
    name: String;
    givenName: String;
    familyName: String;
  };
  results: Result[];
}

export interface Document {
  _id: String;
  documentTitle: String;
  courseID: String;
  uploaderID: String;
  originalFilename: String;
  systemFilename: String;
  uploaded_at: { type: Date, required: true };
}

export interface Enrolement {
  _id: String;
  courseID: String;
  userID: String;
  role: String;
  created_at: { type: Date };
  updated_at: { type: Date };
}

export interface QuestionResponse {
  expectedResults: string;
  actualResults: string;
  studentResults: string;
  score: string;
  feedback: string;
}


