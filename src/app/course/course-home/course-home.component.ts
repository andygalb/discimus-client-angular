import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Course, News} from '../../models/modelInterfaces';
import {UserService} from '../../user.service';
import config from '../../config.json';
import {CourseDialogComponent} from '../../dialogs/course-dialog/course-dialog.component';
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

  courseCopy: Course;

  navigationSubscription;

  constructor(private courseSequenceQuestionService: CourseSequenceQuestionService, private dataService: DataService,
              private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getCourse(this.id);
  }


  getCourse(id: String) {
    this.dataService.getCourse(id)
      .subscribe((data) => {
          console.log(data);
          this.course = data;
          this.userService.setCurrentCourse(data);
        },
        () => {
        });
  }


}
