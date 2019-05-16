import {Component, OnInit, ViewChild} from '@angular/core';
import {IMessage} from '../../models/modelInterfaces';
import {UserService} from '../../user.service';
import {MessengerService} from '../../messenger.service';
import {Message} from '../../models/modelClasses';
import {MatDialog, MatSort, MatSortable} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {MessageViewDialogComponent} from '../../dialogs/message-view-dialog/message-view-dialog.component';

@Component({
  selector: 'app-messenger-inbox',
  templateUrl: './messenger-inbox.component.html',
  styleUrls: ['./messenger-inbox.component.css']
})
export class MessengerInboxComponent implements OnInit {

  messages: Message[];

  dataSource = new MatTableDataSource();
  displayedColumns = ['read', 'fromName', 'title', 'created_at'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private userService: UserService, private messengerService: MessengerService) {
  }

  ngOnInit() {
    this.sort.sort(<MatSortable>({id: 'created_at', start: 'desc'}));
    this.getMessages();
    this.messengerService.checkForNewMessages(this.userService.getCurrentUser()._id);
  }

  getMessages() {

    this.messengerService.getReceivedMessages(this.userService.getCurrentUser()._id).subscribe((response) => {
        //  this.messages = response;
        this.dataSource.data = response;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        console.log(err);
      });

  }

  viewMessage(messageToView: IMessage) {

    const dialogRef = this.dialog.open(MessageViewDialogComponent, {
      width: '50%',
      data: {
        message: messageToView,
        dialogMetaData: {titleText: ' IMessage', okButtonText: 'Send'}
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'quit') {
        if (!messageToView.read) {this.messengerService.markMessageAsRead(messageToView._id).subscribe((data) => {
          messageToView.read = true;
          this.messengerService.checkForNewMessages(this.userService.getCurrentUser()._id);
        }, (err) => {
          console.log(err);
        });
        }
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
