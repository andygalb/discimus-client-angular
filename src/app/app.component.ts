import { Component } from '@angular/core';
import {CourseSequenceQuestionService} from './course-sequence-question.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ltc-app';
  events: string[] = [];
  opened: boolean;

  userService: UserService

  constructor(userService: UserService) {
    this.userService = userService;
  }

  logOut()
  {
    this.userService.logOut();
  }
}

