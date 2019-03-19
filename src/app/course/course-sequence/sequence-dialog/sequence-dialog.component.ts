import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Question, Sequence} from '../../../models/modelInterfaces';
import {QuestionMetaData, RQuestion, RSequence} from '../../../models/modelClasses';
import {Course} from '../../../models/modelInterfaces';
import {RCourse} from '../../../models/modelClasses';
import {CourseDialogComponent} from '../../../home/course-dialog/course-dialog.component';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './sequence-dialog.component.html',
  styleUrls: ['./sequence-dialog.component.css']
})
export class SequenceDialogComponent implements OnInit {

  sequence: Sequence;

  constructor(
    public dialogRef: MatDialogRef<SequenceDialogComponent> , @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit() {
    this.sequence = this.data.sequence;
  }

  cancelQuestion(): void {
    this.dialogRef.close();
  }


}
