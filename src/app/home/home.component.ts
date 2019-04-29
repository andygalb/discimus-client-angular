import { Component, OnInit } from '@angular/core';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {UserService} from '../user.service';
import {DataService} from '../data.service';

import {QuestionDialogComponent} from '../question-dialog/question-dialog.component';
import {CourseDialogComponent} from '../dialogs/course-dialog/course-dialog.component';
import {MatDialog} from '@angular/material';
import {MEnrolement, RCourse} from '../models/modelClasses';
import {Course, Enrolement, News, Question, Sequence, User} from '../models/modelInterfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions: Question[];
  sequences: Sequence[];
  courses: Course[];
  news: News[];
  user: User;
  response: String;


  title = 'Discimus';
  newCourse: Course;

  enrolements: Enrolement[];

  constructor( private courseSequenceQuestionService: CourseSequenceQuestionService, private userService: UserService, private dataService: DataService, public dialog: MatDialog,) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();

    this.userService.getEnrolementsForUser();

       // this.enrolements = this.userService.enrolements;
      //  this.courses = this.userService.courses;

    //this.courseSequenceQuestionService.get().subscribe(data => this.courses = data);
    this.dataService.getNews('all').subscribe(data => this.news = data);
  //  this.courses = [];
 //   this.userService.courses = [];
  }


 /* getCourses() {
    for (let i = 0; i < this.userService.enrolements.length; i++) {
      this.courseSequenceQuestionService.getCourseByID(this.userService.enrolements[i].courseID).subscribe(data => {
          this.userService.courses.push(data);
          this.userService.getEnrolementsForUser();
        },
        (err) => {
        console.log("Error fetching course:"+ err);
        }
      );
    }
  }*/

  onDelete(course: Course): void {

    this.courseSequenceQuestionService.deleteCourse(course).subscribe(
      data => this.response = data,
      err => {
        console.error('Error deleting course!');
        return;
      },
      () => this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data)
    );

  }

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
        if(result === 'submit') {this.submitNewCourse();}
      });
  }

  deleteCourse(courseID){
    this.courseSequenceQuestionService.deleteCourseByID(courseID).subscribe((data) => {
      console.log("Course deleted");
      console.log(data);
    },
      (err) => {
      console.log("Error while deleting course:" + err);
    }
      );
  }


  unenroleUserFromCourse(courseID) {

    let enrolement: MEnrolement;

    for(let enr of this.userService.enrolements){
      if(enr.courseID === courseID) {enrolement = enr;}
    }

    console.log(enrolement);

    this.dataService.unenroleUserFromCourse(enrolement._id)
      .subscribe((data) => {
        console.log(data);

        //Remove enrolement from enrolement list and course from course list.
          this.userService.enrolements = this.userService.enrolements.filter(enrolementToRemove => enrolementToRemove._id !== enrolement._id);
          this.userService.courses =  this.userService.courses.filter(course => course._id !== enrolement.courseID);
      },
        (err) => {console.log("Could not delete enrolement:"+ err);});

  }

}



