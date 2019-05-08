import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {Course} from '../../models/modelInterfaces';
import {MEnrolement, RCourse} from '../../models/modelClasses';
import {CourseDialogComponent} from '../../dialogs/course-dialog/course-dialog.component';
import {MatDialog} from '@angular/material';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  newCourse: Course;
  response: String;

  constructor(public userService: UserService, private dataService: DataService, private courseSequenceQuestionService: CourseSequenceQuestionService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.userService.getEnrolementsForUser();
  }

  /*onDelete(course: Course): void {

    this.courseSequenceQuestionService.deleteCourse(course).subscribe(
      data => this.response = data,
      err => {
        console.error('Error deleting course!');
        return;
      },
      () => this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data)
    );

  }*/

  submitNewCourse(): void {

    let newlyCreatedCourseID: String;

    this.courseSequenceQuestionService.addCourse(this.newCourse).subscribe(
      data => {
        this.response = data;
        newlyCreatedCourseID = data['courseID'];
        this.newCourse = null;
      },
      err => {
        console.error('Error adding course!');
        return;
      },
      () => {

        this.dataService.enroleUserOnCourse(newlyCreatedCourseID, this.userService.user._id, 'teacher').subscribe(
          data => {
          },
          err => {
          },
          () => {
            this.userService.getEnrolementsForUser();

          }
        );
      },
    );

  }

  openCourseDialog(): void {

    this.newCourse = new RCourse();
    let dialogRef = this.dialog.open(CourseDialogComponent, {

      data: {course: this.newCourse, dialogMetaData: {titleText: 'Add new course', okButtonText: 'Save'}},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'submit') {
        this.submitNewCourse();
      }
    });
  }

  deleteCourse(courseID) {
    this.courseSequenceQuestionService.deleteCourseByID(courseID).subscribe((data) => {
        console.log('Course deleted');
        console.log(data);
      },
      (err) => {
        console.log('Error while deleting course:' + err);
      }
    );
  }


  unenroleUserFromCourse(courseID) {

    let enrolement: MEnrolement;

    for (let enr of this.userService.enrolements) {
      if (enr.courseID === courseID) {
        enrolement = enr;
      }
    }

    this.dataService.unenroleUserFromCourse(enrolement._id)
      .subscribe((data) => {
          console.log(data);

          //Remove enrolement from enrolement list and course from course list.
          this.userService.enrolements = this.userService.enrolements.filter(enrolementToRemove => enrolementToRemove._id !== enrolement._id);
          this.userService.courses = this.userService.courses.filter(course => course._id !== enrolement.courseID);
        },
        (err) => {
          console.log('Could not delete enrolement:' + err);
        });
  }
}
