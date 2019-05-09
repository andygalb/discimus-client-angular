import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {Question, Sequence} from '../models/modelInterfaces';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {RQuestion} from '../models/modelClasses';

@Component({
  selector: 'app-sequence',
  styleUrls: ['./sequence.component.css'],
  templateUrl: './sequence.component.html',
})

export class SequenceComponent implements OnInit {

  id: string;
  response: string;
  questionForm: FormGroup;

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

  questions: Question[];
  questionsToShow: Question[];
  selectedSequence: Sequence;
  selectedQuestion: Question;
  newQuestion: Question;
  newQuestionID: string;
  myUserService: UserService;

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.setCurrentSequence(this.id);
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
        this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions)
          .subscribe(data => this.questionsToShow = data
        );
      }
    );
  }

  submitNewQuestion(): void {

    this.courseSequenceQuestionService.addQuestion(this.newQuestion).subscribe(
      data => {
        this.response = data;
        console.log('Question added...');
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
            console.log('Sequence updated...');
            this.response = data;
          },
          err => {
            console.error('Error adding question to seqeunce');
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

}






