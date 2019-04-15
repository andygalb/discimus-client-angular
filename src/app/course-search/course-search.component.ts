import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {DataService} from '../data.service';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {Course} from '../models/modelInterfaces';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {

  courses = [];
  userEnrolements = [];
  ready = false;

  selectedCourse: Course;

  constructor(private userService : UserService, private dataService: DataService,private courseSequenceQuestionService: CourseSequenceQuestionService) { }

  ngOnInit() {
    this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data);
    this.fetchEnrolements();
  }

  enroleUser(course){
    this.dataService.enroleUserOnCourse(course._id, this.userService.user._id, 'student')
      .subscribe((data) => {
        console.log(data);
        this.fetchEnrolements();
        this.userService.getEnrolementsForUser();
      });
  }

  fetchEnrolements(){
    this.dataService.getEnrolementsForUser(this.userService.user._id).subscribe(data => {
        this.userEnrolements = data;
        this.userEnrolledOnCourses();
    }
      );
  }

  userEnrolledOnCourses() {

    for(let j=0; j < this.courses.length; j++) {
      for (let i = 0; i< this.userEnrolements.length; i++)
      {
        console.log(this.courses[j]);
        console.log(this.userEnrolements[i]);
        if (this.userEnrolements[i].courseID === this.courses[j]._id){
          this.courses[j].isEnrolled = true;
        }
      }

    }
    this.ready = true;

  }
}
