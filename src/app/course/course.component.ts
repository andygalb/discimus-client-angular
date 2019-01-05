import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../models/modelInterfaces';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  id: String;
  course: Course;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getCourse(id: String) {
    this.dataService.getCourse(id)
      .subscribe((data) => {
        console.log(data);
        this.course = data;
      });
  }

}
