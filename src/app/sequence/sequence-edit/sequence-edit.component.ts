import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {UserService} from '../../user.service';
import {Question, Sequence} from '../../models/modelInterfaces';
import {DialogMetaData, QuestionMetaData, RQuestion} from '../../models/modelClasses';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {QuestionDialogComponent} from '../../dialogs/question-dialog/question-dialog.component';

@Component({
  selector: 'app-sequence',
  styleUrls: ['sequence-edit.component.css'],
  templateUrl: 'sequence-edit.component.html',
})

export class SequenceEditComponent implements OnInit {

  courseID: number;
  id: string;
  response: string;
  questionForm: FormGroup;
  questionTypes = [
    {name: 'Pure text', value: 'pure-text'},
    {name: 'Simple text answer', value: 'simple-text'},
    {name: 'C#', value: 'c-sharp'}
  ];

  metadata: QuestionMetaData;

  constructor(private route: ActivatedRoute,
              public courseSequenceQuestionService: CourseSequenceQuestionService,
              public userService: UserService,
              public dialog: MatDialog,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.questionForm = fb.group({
      title: ['', [Validators.required]],
      questionText: ['', [Validators.required]],
      questionAnswer: ['', [Validators.required]],
    });
  }

  sequences: Sequence[];
  questions: Question[];
  questionsToShow: Question[];
  selectedSequence: Sequence = null;
  selectedQuestion: Question;
  newQuestion: Question;
  newQuestionID: string;
  myUserService: UserService;
  displayedColumns: string[] = ['title', 'text', 'creationDate', 'edit', 'delete'];
  dataSource: Question[];

  ngOnInit() {

    const sequenceID = this.route.parent.snapshot.params['id'];
    console.log('THe sequence ID is:' + sequenceID);

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
        console.log('Attempting to load questions');

        this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(
          data => {
            console.log('Got data back');
            console.log(data);
            this.questionsToShow = data;
          }, err => {
            console.error('Error getting questions! ' + err);
            return;
          });
      });

    this.dataSource = this.questions;
    this.myUserService = this.userService;

  }

  updateQuestionType(value): void {
    this.newQuestion.type = value;
  }

  editQuestion(questionID: string): void {

    this.courseSequenceQuestionService.getQuestionByID(questionID).subscribe((question) => {

      this.newQuestion = question;
      this.metadata = new QuestionMetaData();

      const dialogMetaData = new DialogMetaData('Edit Question', 'Save', 'edit');

      const dialogRef = this.dialog.open(QuestionDialogComponent, {
        data: {
          question: this.newQuestion,
          metadata: this.metadata,
          dialogMetaData: dialogMetaData
        }
      });

      // Dialog is closed.
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // TODO Code smell
          if (this.newQuestion.type === 'csharp') {
            const answer = {inputs: this.metadata.inputs, outputs: this.metadata.outputs};
          }
          this.updateQuestion();
        }
      });
    });
  }

  createNewQuestion(): void {

    this.newQuestion = new RQuestion();
    this.metadata = new QuestionMetaData();

    const dialogMetaData = new DialogMetaData('Create New Question', 'Save', 'create');

    this.newQuestion.questionAnswer = {text: '', javascript: '', csharp: ''};

    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      data: {
        question: this.newQuestion,
        metadata: this.metadata,
        dialogMetaData: dialogMetaData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {

        // TODO Horrible code here...
        if (this.newQuestion.type === 'csharp') {
          const answer = {
            inputs: this.metadata.inputs,
            outputs: this.metadata.outputs
          };

          console.log('Logging answer: ' + answer);
          console.log(this.metadata.inputs);
          console.log(this.metadata.outputs);
          console.log(JSON.stringify(answer));
          this.newQuestion.questionAnswer.text = JSON.stringify(answer);
        }
        console.log(result);
        this.submitNewQuestion();
      }
    });
  }

  deleteQuestion(questionID): void {

    this.courseSequenceQuestionService.deleteQuestion(questionID).subscribe(
      data => this.response = data,
      err => {
        console.error('Error deleting question!');
        return;
      },
      () => {
        this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(data => {
          this.questionsToShow = data;
        });
      }
    );
  }

  submitNewQuestion(): void {

    this.courseSequenceQuestionService.addQuestion(this.newQuestion).subscribe(
      data => {
        console.log(this.newQuestion);
        this.response = data;
        console.log('Added question');
        console.log(data);
        this.newQuestionID = data['questionID'];
      },
      err => {
        console.error('Error adding question!');
        console.error(err);
        return;
      },
      () => {

        // TODO Case when sequence could not be created must be handled

        this.selectedSequence.questions.push(JSON.stringify({'id': this.newQuestionID, 'type': this.newQuestion.type}));
        this.courseSequenceQuestionService.updateSequence(this.selectedSequence).subscribe(
          data => {
            console.log(data);
            console.log('Added question to sequence and saved.');
            this.response = data;
          },
          err => {
            console.error('Error adding question to sequence');
            console.log(err);
            return;
          },
          () => {
            this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(data => {
              this.questionsToShow = data;
            });
            this.newQuestion = null;
          }
        );

      }
    );
  }


  updateQuestion(): void {

    this.courseSequenceQuestionService.updateQuestion(this.newQuestion).subscribe(
      data => {
        this.response = data;
      },
      err => {
        console.error('Error adding question:' + err);
        return;
      },
      () => {

        /*    this.selectedSequence.questions.push(JSON.stringify({'id': this.newQuestionID, 'type' : this.newQuestion.type}));
            this.courseSequenceQuestionService.updateSequence(this.selectedSequence).subscribe(
              data => {
                console.log(data);
                console.log('Updated question');
                this.response = data;
              },
              err => {
                console.error('Error adding question to sequence');
                console.log(err);
                return;
              },
              () => {
                this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(data =>
                {
                  this.questionsToShow = data;
                })
                this.newQuestion = null;
              }

            );*/

      }
    );
  }


  reloadDisplay(): void {
    this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(
      data => {
        console.log(data);
        this.questionsToShow = data;
      }, err => {
        console.error('Error getting questions! ' + err);
        return;
      });
  }

  saveChanges(): void {

    this.courseSequenceQuestionService.updateSequence(this.selectedSequence).subscribe(
      data => {
        console.log(data);
        this.response = data;
      },
      err => {
        console.error('Error updating sequence');
        return;
      },
      () => {
        // this.reloadDisplay();
      }
    );
  }

}






