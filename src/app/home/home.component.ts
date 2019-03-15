import { Component, OnInit } from '@angular/core';
import {Course, News, Question, Sequence, User, Enrolement} from '../models/modelInterfaces';
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

  enrolements: Enrolement[];

  constructor(private courseSequenceQuestionService: CourseSequenceQuestionService, private userService: UserService, private dataService: DataService) { }

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
  }


getCourses(){
    for ( let i = 0; i< this.enrolements.length; i++)
    {
      this.courseSequenceQuestionService.getCourseByID(this.enrolements[i].courseID).subscribe(data => this.courses.push(data));
    }
}


}


