

import {Enrolement, Course, CourseDocument, Message, Question, Sequence, User} from '../models/modelClasses';

export class MockFactory {

  static getMockCourse() {

    const course = new Course();

    course._id = 'Test ID';
    course.courseTitle = 'Test Course';
    course.courseDescription = 'Test Description';
    course.creatorID = 'Test Creator ID';
    course.courseSummary = 'Test Course Summary';
    course.sequences = ['Test Seq 1', 'Test Seq 2'];
    return course;
  }

  static getMockSequence() {

    const sequence = new Sequence();

    sequence._id = 'Test ID';
    sequence.sequenceTitle = 'Test ISequence Title';
    sequence.sequenceDescription = 'Test ISequence Description';
    sequence.questions = ['Test IQuestion', 'Test IQuestion'];
    return sequence;
  }

  static getMockQuestion() {

    const question = new Question();

    question._id = 'Test ID';
    question.title = 'Test IQuestion';
    question.text = 'Test Text';
    question.type = 'Test type';
    question.questionAnswer = {text: 'answer', javascript: '', csharp: ''};
    return question;

  }

  static getMockMessage() {

    const message = new Message();

    message._id = 'Test ID';
    message.title = 'Test message';
    message.content = 'Test Content';
    message.content = 'Test content';
    message.toID = 'Test To ID';
    message.recipientLastName = 'Test Recip Last Name';
    message.recipientFirstName = 'Test Recipt First Name';
    message.senderFirstName = 'Test Sender First Name';
    message.senderLastName = 'Test Sender Last Name';

    return message;
  }

  static getMockEnrolement() {

    const enrolement = new Enrolement();

    enrolement._id = 'Test ID';
    enrolement.courseID = 'Test Course ID';
    enrolement.role = 'Test Role';
    enrolement.userID = 'Test UserID';

    return enrolement;
  }

  static getMockUser() {

    const user = new User();

    user._id = 'Test ID';
    user.results = [{
      _id: 'Test ID',
      type: 'Test type',
      dateTime: Date.now(),
      answer: 'Test Answer',
      courseID: 'Test course ID',
      sequenceID: 'Test ISequence ID',
      questionID: 'Test sequence ID',
      courseTitle: 'Test Course Title',
      sequenceTitle: 'Test ISequence Title',
      questionTitle: 'Test question title',
    }
    ];
    user.local = {
      username: '',
      password: '',
      admin: false,
      organisation: null,
      location: null,
      meta: null,
      firstName: 'Test Firstname',
      userType : 'Test Usertype',
      email: 'Test Email',
      lastName : 'Test Lastname'
    };

    return user;
  }

  static getMockDocument() {

    const doc = new CourseDocument();

    doc._id = 'Test ID';
    doc.course = 'Test Course';
    doc.originalFilename = 'Test original filename';
    doc.owner = 'Test owner';

    return doc;
  }


}
