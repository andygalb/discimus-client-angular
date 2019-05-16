import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, PageEvent} from '@angular/material';
import {DataService} from '../../data.service';
import {IUser} from '../../models/modelInterfaces';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  users: IUser[];
  selected: IUser[] = [];

  actions = ['delete'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  dataSource = new MatTableDataSource();
  displayedColumns = ['selectUser', 'firstName', 'lastName', 'userName', 'email', 'admin', 'userType'];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.showUsers();
  }

  showUsers() {
    this.dataService.getUsers()
      .subscribe((data) => {
        console.log(data);
        this.users = data;
        this.dataSource.data = this.users;
      });
  }

  dealWithClick($event) {
    console.log($event);

    if ($event.checked === true) {
      this.selected.push(this.users[0]);
    }
  }

}
