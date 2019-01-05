import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {UserService} from '../../user.service';
import {Question, Sequence} from '../../models/modelInterfaces';
import {RQuestion} from '../../models/modelClasses';


@Component({
  selector: 'app-sequence',
  templateUrl: './sequence-home.component.html',
})

export class SequenceHomeComponent implements OnInit {

  title = 'LTC';
  id: string;
  response: string;
  questionForm: FormGroup;
  questions: Question[];
  questionsToShow: Question[];
  selectedSequence: Sequence;
  selectedQuestion: Question;
  newQuestion: Question;
  newQuestionID: string;
  myUserService: UserService;
  feedback: string;

  constructor(private route: ActivatedRoute,
              private courseSequenceQuestionService: CourseSequenceQuestionService,
              private userService: UserService,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.questionForm = fb.group({
      title: ['', [Validators.required]],
      questionText: ['', [Validators.required]],
      questionAnswer: ['', [Validators.required]],
    });
  }

  ngOnInit() {

    const sequenceID = this.route.parent.snapshot.params['id'];

    console.log('The sequence ID is:' + sequenceID);

    this.courseSequenceQuestionService.getSequenceByID(sequenceID).subscribe(
      data => {
        console.log('Attempting to load seqeunce in ngInit');
        console.log(data);
        this.selectedSequence = data;
        this.courseSequenceQuestionService.currentSequence = data;
      },
      err => {
        console.error('Error getting sequence!');
        return;
      },
      () => {
        this.userService.currentSequenceID = this.selectedSequence._id;
        this.userService.currentSequenceTitle = this.selectedSequence.sequenceTitle;

        console.log('Attempting to load questions');
        this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(
          data => {
            console.log('Got data back');
            console.log(data);
            this.questionsToShow = data;
          }
        ),
          err => {
            console.error('Error getting questions!');
            return;
          };
      });
    this.myUserService = this.userService;
  }

  createNewQuestion(): void {
    this.newQuestion = new RQuestion();
  }

  deleteQuestion(question): void {

    this.courseSequenceQuestionService.deleteQuestion(question).subscribe(
      data => this.response = data,
      err => {
        console.error('Error deleting question!');
        return;
      },
      () => {
        this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(data => this.questionsToShow = data);
      }
    );
  }

  submitNewQuestion(): void {

    this.courseSequenceQuestionService.addQuestion(this.newQuestion).subscribe(
      data => {
        this.response = data;
        console.log(data);
        this.newQuestionID = data['questionID'];
      },
      err => {
        console.error('Error adding question!');
        return;
      },
      () => {

        // TODO Case when sequence could not be created must be handled
        this.selectedSequence.questions.push(this.newQuestionID);
        this.courseSequenceQuestionService.updateSequence(this.selectedSequence).subscribe(
          data => {
            console.log(data);
            this.response = data;
          },
          err => {
            console.error('Error adding question to seqeunce');
            return;
          },
          () => {
            this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(data => this.questionsToShow = data);
            this.newQuestion = null;
          }
        );
      }
    );
  }

    answerQuestion(question)
    {
      console.log('You answered:' + question.userAnswer);
      const isCorrect: boolean = this.courseSequenceQuestionService.isAnswerCorrect(question, question.userAnswer);

      if (isCorrect) {
        this.userService.addCorrectAnswer(question._id, question.userAnswer);
        question.userResponse = 'Right answer!';
      } else {
        question.userResponse = 'Wrong answer - try again.';
      }
    }


}






