import {Component, OnInit} from '@angular/core';
import {CourseSequenceQuestionService} from './course-sequence-question.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';
import {LoaderService} from './interceptor/httpconfig.interceptor.';
import {Course} from './models/modelInterfaces';
import {MessengerService} from './messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  constructor(private userService: UserService, public loaderService: LoaderService, private messengerService: MessengerService) {

  }

  ngOnInit() {

  }




  logOut()
  {
    this.userService.logOut();
  }
}

