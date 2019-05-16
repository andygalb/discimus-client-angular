import {Component, OnInit} from '@angular/core';
import {Message, Sequence} from '../models/modelClasses';
import {SequenceDialogComponent} from '../dialogs/sequence-dialog/sequence-dialog.component';
import {MessageDialogComponent} from '../dialogs/message-dialog/message-dialog.component';
import {MatDialog} from '@angular/material';
import {MessengerService} from '../messenger.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  newMessage: Message;

  constructor(public dialog: MatDialog, private messengerService: MessengerService, private userService: UserService) {
  }

  ngOnInit() {
  }

  openMessageDialog(): void {

    this.newMessage = new Message();
    const dialogRef = this.dialog.open(MessageDialogComponent, {

      data: {
        message: this.newMessage,
        dialogMetaData: {titleText: ' Create IMessage', okButtonText: 'Send'}
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'submit') {
        this.sendNewMessage();
      }

    });
  }

  sendNewMessage() {

    this.newMessage.fromID = this.userService.getCurrentUser()._id;
    this.newMessage.fromName = this.userService.getCurrentUser().local.firstName;

    this.messengerService.sendMessage(this.newMessage).subscribe((response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      });

  }

}
