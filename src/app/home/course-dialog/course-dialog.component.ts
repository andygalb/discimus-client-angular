import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Question} from '../../models/modelInterfaces';
import {QuestionMetaData, RQuestion} from '../../models/modelClasses';
import {Course} from '../../models/modelInterfaces';
import {RCourse} from '../../models/modelClasses';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  course: Course;

  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponent> , @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit() {
    this.course = this.data.course;
  }

  cancelQuestion(): void {
    this.dialogRef.close();
  }

}
