import { Component, OnInit } from '@angular/core';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {UserService} from '../user.service';
import {DataService} from '../data.service';

import {QuestionDialogComponent} from '../question-dialog/question-dialog.component';
import {CourseDialogComponent} from './course-dialog/course-dialog.component';
import {MatDialog} from '@angular/material';
import {RCourse} from '../models/modelClasses';
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

  constructor(private courseSequenceQuestionService: CourseSequenceQuestionService, private userService: UserService, private dataService: DataService, public dialog: MatDialog,) {
  }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.dataService.getEnrolementsForUser(this.userService.user._id).subscribe(data => {
        console.log(data);
        this.enrolements = data;
        this.getCourses();
      }
    );
    //this.courseSequenceQuestionService.get().subscribe(data => this.courses = data);
    this.dataService.getNews('all').subscribe(data => this.news = data);
    this.courses = [];
    this.userService.courses = [];
  }


  getCourses() {
    for (let i = 0; i < this.enrolements.length; i++) {
      this.courseSequenceQuestionService.getCourseByID(this.enrolements[i].courseID).subscribe(data => {
        this.courses.push(data);
        this.userService.courses.push(data);
        }
      );
    }
  }

  createNewCourse() {
    console.log("Adding new course");
    this.newCourse = new RCourse();
  }

  onSelect(course: Course): void {
    this.courseSequenceQuestionService.addCourse(this.newCourse).subscribe(data => this.response = data);
  }

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

            this.courses = [];
            this.enrolements = [];
            this.dataService.getEnrolementsForUser(this.userService.user._id).subscribe(data => {
              console.log(data);
              this.enrolements = data;
              this.getCourses();
            });
          }
        );
      },
    );

  }

  openCourseDialog(): void {

    this.newCourse = new RCourse();
    let dialogRef = this.dialog.open(CourseDialogComponent, {

      data: {course: this.newCourse}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.submitNewCourse();
      });
  }

}


