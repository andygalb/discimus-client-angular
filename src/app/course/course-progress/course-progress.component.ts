import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/modelInterfaces';
import {I} from '@angular/cdk/typings/keycodes';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-course-progress',
  templateUrl: './course-progress.component.html',
  styleUrls: ['./course-progress.component.css']
})
export class CourseProgressComponent implements OnInit {

  @Input() id: String;
  courseTotal: number; //total number of points in course.
  courseScore: number; //user's score in course so far.
  courseProgress: number; //procent score so far.

  spinnerColor = 'primary';
  spinnerMode = 'determinate';

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.courseScore = this.userService.getCurrentScoreForCourse(this.id);
    this.calculateProgress();
  }

  calculateProgress() {
   //Get course summary from user service.
    console.log(this.userService.getCurrentCourse().courseSummary);

    const courseSummary = JSON.parse(this.userService.getCurrentCourse().courseSummary);

    let total = 0;

    for (const sequence of courseSummary.sequences) {

      for (const question of sequence.questions) {
        if (question.type != 'simple-text') {total += 1; }
      }
    }
    this.courseTotal = total;
    this.courseProgress = 100 / this.courseTotal * this.courseScore;
  }

}
