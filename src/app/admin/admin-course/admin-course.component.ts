import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {MatTableDataSource} from '@angular/material';
import {ICourse} from '../../models/modelInterfaces';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {

  courses: ICourse[];

  dataSource = new MatTableDataSource();
  displayedColumns = ['selectCourse', 'courseTitle', 'teacher', 'creationDate'];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.showCourses();
  }

  showCourses() {
    this.dataService.getCourses()
      .subscribe((data) => {
        console.log(data);
        this.courses = data;
        this.dataSource.data = this.courses;
      });
  }
}
