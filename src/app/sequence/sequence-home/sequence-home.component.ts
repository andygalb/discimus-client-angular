import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {UserService} from '../../user.service';
import {IQuestion, IQuestionResponse, ISequence} from '../../models/modelInterfaces';
import {Question} from '../../models/modelClasses';


@Component({
  selector: 'app-sequence',
  templateUrl: './sequence-home.component.html',
})

export class SequenceHomeComponent implements OnInit {

  id: string;
  response: string;
  questionForm: FormGroup;
  questions: IQuestion[];
  questionsToShow: IQuestion[];
  selectedSequence: ISequence;
  selectedQuestion: IQuestion;
  newQuestion: IQuestion;
  newQuestionID: string;
  myUserService: UserService;
  feedback: string;
  questionResponse: IQuestionResponse;

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

    this.courseSequenceQuestionService.getSequenceByID(sequenceID).subscribe(
      data => {
        this.selectedSequence = data;
        this.courseSequenceQuestionService.currentSequence = data;
        this.userService.setCurrentSequence(data);
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
            this.userService.setCurrentQuestions(data);
          }, err => {
            console.error('Error getting questions! ' + err);
            return;
          });
      });
    this.myUserService = this.userService;
  }

  createNewQuestion(): void {
    this.newQuestion = new Question();
  }

  deleteQuestion(question): void {

    this.courseSequenceQuestionService.deleteQuestion(question).subscribe(
      data => this.response = data,
      err => {
        console.error('Error deleting question!');
        return;
      },
      () => {
        this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions)
          .subscribe(data => this.questionsToShow = data);
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
            console.error('Error adding question to sequence');
            return;
          },
          () => {
            this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions)
              .subscribe(data => this.questionsToShow = data);
            this.newQuestion = null;
          }
        );
      }
    );
  }

  answerQuestion(question) {
    console.log('You answered:' + question.userAnswer);

    const response = this.courseSequenceQuestionService.isAnswerCorrect(question, question.userAnswer);

    response.subscribe(
      data => {

        console.log(data);
        console.log(data.score === '1');

        // @ts-ignore
        if (data.score === 1) {
          console.log('Answer correct!');
          this.userService.addCorrectAnswer(question, question.userAnswer);
          question.userResponse = data.feedback;
        } else {
          this.questionResponse = data;
          question.userResponse = data.feedback;
        }
      }
    );
  }
}






