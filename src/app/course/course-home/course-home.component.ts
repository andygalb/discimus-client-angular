import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';
import {Course, News} from '../../models/modelInterfaces';
import {UserService} from '../../user.service';
import config from '../../config.json';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css']
})
export class CourseHomeComponent implements OnInit {

  url = config.serverAddress;
  id: String;
  course: Course;
  news: News[];

  constructor(private dataService: DataService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getCourse(this.id);
    this.getNews(this.id);
  }

  getCourse(id: String) {
    this.dataService.getCourse(id)
      .subscribe((data) => {
        console.log(data);
        this.course = data;
      });
  }

  getNews(id: String) {
    this.dataService.getNews(id)
      .subscribe((data) => {
        console.log(data);
        this.news = data;
      });
  }
}
