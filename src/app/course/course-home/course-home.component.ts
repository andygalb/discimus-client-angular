import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';
import {Course, News} from '../../models/modelInterfaces';
import {UserService} from '../../user.service';
import config from '../../config.json';
import {RCourse} from '../../models/modelClasses';
import {CourseDialogComponent} from '../../home/course-dialog/course-dialog.component';
import {MatDialog} from '@angular/material';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css']
})
export class CourseHomeComponent implements OnInit {

  url = config.serverAddress;
  id: String;
  course: Course;
  news: News[];

  courseCopy: Course;
  courseTotal: number;
  courseScore: number;
  courseProgress: number;

  spinnerColor = 'primary';
  spinnerMode = 'determinate';

  constructor(private dialog: MatDialog, private courseSequenceQuestionService: CourseSequenceQuestionService, private dataService: DataService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getCourse(this.id);
    this.getNews(this.id);
    this.courseScore = this.userService.getCurrentScoreForCourse(this.id);
  }

  getCourse(id: String) {
    this.dataService.getCourse(id)
      .subscribe((data) => {
        console.log(data);
        this.course = data;
        this.userService.setCurrentCourse(data);
      },
        () => {},
        () => {  this.calculateProgress(); });
  }

  getNews(id: String) {
    this.dataService.getNews(id)
      .subscribe((data) => {
        console.log(data);
        this.news = data;
      });
  }

  calculateProgress() {

    let courseSummary = JSON.parse(this.course.courseSummary);

    let total=0;
    let points=0;

    for(let sequence of courseSummary.sequences){

      for(let question of sequence.questions){
        if(question.type!='simple-text'){total += 1;}
      }
    }
    this.courseTotal = total;
    this.courseProgress = 100 / this.courseTotal* this.courseScore;
  }

  openCourseDialog(): void {

    let dialogRef = this.dialog.open(CourseDialogComponent, {

      data: {course: this.course, dialogMetaData: {titleText: ' Edit course', okButtonText: 'Save'}
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result:" + result);
        if (result==='submit') this.updateCourse();
        else (this.getCourse(this.id));
    });
  }

  updateCourse(): void {

    let newlyCreatedCourseID: String;

    this.courseSequenceQuestionService.updateCourse(this.course).subscribe(
      data => {
       console.log(data);
        this.getCourse(this.id);
      },
      err => {
        console.error('Error updating course!' + err);
        return;
      }
    );

  }
}
