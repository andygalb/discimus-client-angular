import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {Course, Question, Sequence} from '../models/modelInterfaces';
import {UserService} from '../user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  id: String;
  course: Course;
  sequence: Sequence;
  question: Question;

  constructor(private dataService: DataService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCourse(this.id);
  }

  getCourse(id: String) {
    this.dataService.getCourse(id)
      .subscribe((course) => {
        console.log(course);
        this.course = course;
        this.userService.currentCourse = course;
      });
  }

}
