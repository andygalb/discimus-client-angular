import { Component, OnInit } from '@angular/core';
import {RMessage} from '../../models/modelClasses';
import {MatTableDataSource} from '@angular/material';
import {UserService} from '../../user.service';
import {MessengerService} from '../../messenger.service';

@Component({
  selector: 'app-messenger-sent',
  templateUrl: './messenger-sent.component.html',
  styleUrls: ['./messenger-sent.component.css']
})
export class MessengerSentComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['toName','title', 'date'];

  constructor(private userService: UserService, private messengerService: MessengerService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {

    this.messengerService.getSentMessages(this.userService.getCurrentUser()._id).subscribe((response) => {
        this.dataSource.data= response;
      },
      (err) => {
        console.log(err);
      });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
