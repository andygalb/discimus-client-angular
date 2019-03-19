import { Component, OnInit } from '@angular/core';
import {User} from '../../models/modelInterfaces';
import {DataService} from '../../data.service';
import {UserService} from '../../user.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-course-students-component',
  templateUrl: './course-students.component.html',
  styleUrls: ['./course-students.component.css']
})
export class CourseStudentsComponent implements OnInit {

  // @ts-ignore
  users: User[];
  dataSource = new MatTableDataSource();
  displayedColumns = ['userFirstName', 'userSurname', 'userEmail','userType'];

  constructor(private dataService: DataService, private userService: UserService) { }

  ngOnInit() {
    this.dataService.getUsersForCourse(this.userService.currentCourse._id).subscribe(data =>{
      this.users = data;
      this.dataSource.data = data;
    });
  }

}
