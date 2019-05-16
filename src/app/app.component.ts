import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {LoaderService} from './interceptor/httpconfig.interceptor.';
import {MessengerService} from './messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  title = 'Discimus';

  constructor(public userService: UserService, public loaderService: LoaderService, public messengerService: MessengerService) {

  }

  ngOnInit() {

  }


  logOut() {
    this.userService.logOut();
  }
}

