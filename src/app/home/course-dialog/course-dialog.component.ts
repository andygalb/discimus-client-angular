import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Question} from '../../models/modelInterfaces';
import {DialogMetaData, QuestionMetaData, RQuestion} from '../../models/modelClasses';
import {Course} from '../../models/modelInterfaces';
import {RCourse} from '../../models/modelClasses';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  course: Course;
  dialogMetaData: DialogMetaData;

  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponent> , @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

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
