import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {CourseDialogComponent} from '../../dialogs/course-dialog/course-dialog.component';
import {MatDialog} from '@angular/material';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {DataService} from '../../data.service';
import {Course} from '../../models/modelInterfaces';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.css']
})
export class CourseDescriptionComponent implements OnInit {

  @Input() id: String;
  course: Course;

  constructor(private dialog: MatDialog, public userService: UserService, private dataService: DataService, private courseSequenceQuestionService: CourseSequenceQuestionService) {
  }

  ngOnInit() {
  }

  openCourseDialog(): void {
    this.course = this.userService.getCurrentCourse();
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      data: {
        course: this.course,
        dialogMetaData: {titleText: ' Edit course', okButtonText: 'Save'}
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Result:' + result);
      if (result === 'submit') {

        this.updateCourse();
      } else {
        (this.getCourse(this.id));
      }
    });
  }

  updateCourse(): void {

    this.courseSequenceQuestionService.updateCourse(this.course).subscribe(
      data => {
        this.getCourse(this.id);
      },
      err => {
        console.error('Error updating course!' + err);
        return;
      }
    );

  }

  getCourse(id: String) {
    this.dataService.getCourse(id)
      .subscribe((data) => {
          //  this.course = data;
          this.userService.setCurrentCourse(data);
        },
        () => {
        });
  }

}
