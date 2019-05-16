import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IQuestion} from '../../models/modelInterfaces';
import {DialogMetaData, QuestionMetaData, Question} from '../../models/modelClasses';
import {ICourse} from '../../models/modelInterfaces';
import {Course} from '../../models/modelClasses';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  course: ICourse;
  dialogMetaData: DialogMetaData;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Course description here...',
  };

  constructor(public dialogRef: MatDialogRef<CourseDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.course = this.data.course;
    this.dialogMetaData = this.data.dialogMetaData;
  }

  cancelDialog(): void {
    this.dialogRef.close('quit');
  }

  onSubmit() {
    this.dialogRef.close('submit');
  }

}
