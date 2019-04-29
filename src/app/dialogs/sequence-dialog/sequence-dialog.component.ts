import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Question, Sequence} from '../../models/modelInterfaces';
import {QuestionMetaData, RQuestion, RSequence} from '../../models/modelClasses';
import {Course} from '../../models/modelInterfaces';
import {RCourse} from '../../models/modelClasses';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './sequence-dialog.component.html',
  styleUrls: ['./sequence-dialog.component.css']
})
export class SequenceDialogComponent implements OnInit {

  sequence: Sequence;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Sequence description here...',
  };

  constructor(
    public dialogRef: MatDialogRef<SequenceDialogComponent> , @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit() {
    this.sequence = this.data.sequence;
  }

  cancelDialog(): void {
    this.dialogRef.close('quit');
  }

  onSubmit() {
    this.dialogRef.close('submit');
  }


}
