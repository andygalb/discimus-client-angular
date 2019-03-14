import { Component, OnInit } from '@angular/core';
import {Course, News, Question, Sequence, User} from '../models/modelInterfaces';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {UserService} from '../user.service';
import {DataService} from '../data.service';

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

  title = 'Discimus';

  constructor(private courseSequenceQuestionService: CourseSequenceQuestionService, private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data);
    this.dataService.getNews('all').subscribe(data => this.news = data);
  }

}
