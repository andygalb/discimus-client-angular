import { Component, OnInit } from '@angular/core';
import {User} from '../../models/modelInterfaces';
import {DataService} from '../../data.service';
import {UserService} from '../../user.service';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private dataService: DataService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    //TODO Hack! Get id from userService instead.
    this.dataService.getUsersForCourse(this.route.parent.snapshot.paramMap.get('id')).subscribe(data =>{
      this.users = data;
      this.dataSource.data = data;
    });
  }

}
