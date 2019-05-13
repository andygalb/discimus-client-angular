

import {RCourse, RQuestion, RSequence} from '../models/modelClasses';

export class MockFactory {

  static getMockCourse()
  {

    const course = new RCourse();

    course._id = 'Test ID';
    course.courseTitle = 'Test Course';
    course.courseDescription = 'Test Description';
    course.creatorID = 'Test Creator ID';
    course.courseSummary = 'Test Course Summary';
    course.sequences = ['Test Seq 1', 'Test Seq 2'];
    return course;
  }

  static getMockSequence() {

    const sequence = new RSequence();

    sequence._id = 'Test ID';
    sequence.sequenceTitle = 'Test Sequence';
    sequence.sequenceDescription = 'Test Sequence';
    sequence.questions = ['Test Question', 'Test Question'];
    return sequence;
  }

  static getMockQuestion(){

    const question = new RQuestion();

    question._id = 'Test ID';
    question.title = 'Test Question';
    question.text = 'Test Text';
    question.type = 'Test type';
    question.questionAnswer = {text: 'answer', javascript: '', csharp: ''};
    return question;

  }


}
