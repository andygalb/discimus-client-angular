import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Question} from '../models/modelInterfaces';
import {QuestionMetaData, RQuestion} from '../models/modelClasses';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements OnInit {

  questionTypes = [
    {name: 'Text only', value : 'simple-text'},
    {name: 'Simple text answer', value : 'simple-text-answer'},
    {name: 'C#', value : 'csharp'},
    {name: 'Multiple choice', value : 'multiple-choice'}
  ];

  multipleChoiceChoices = ['bananas', 'apples', 'pears'];

  newQuestion: RQuestion;
  metadata: QuestionMetaData;

  constructor(
    public dialogRef: MatDialogRef<QuestionDialogComponent> ,@Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit() {
    this.newQuestion = this.data.question;
    this.metadata = this.data.metadata;
  }

  updateQuestionType(type) {
    this.newQuestion.type = type;
  }

  cancelQuestion(): void {
    this.dialogRef.close();
  }

  removeChoice(choice){
    this.multipleChoiceChoices = this.multipleChoiceChoices.filter(item => item !== choice);
  }

}
