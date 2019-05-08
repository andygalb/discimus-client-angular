import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {DataService} from '../data.service';
import {News, User} from '../models/modelInterfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }
}



