import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../models/modelInterfaces';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css']
})
export class CourseHomeComponent implements OnInit {

  id: String;
  course: Course;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getCourse(this.id);
  }

  getCourse(id: String) {
    this.dataService.getCourse(id)
      .subscribe((data) => {
        console.log(data);
        this.course = data;
      });
  }
}
