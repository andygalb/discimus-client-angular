import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {DialogMetaData, Message} from '../../models/modelClasses';
import {IUser} from '../../models/modelInterfaces';
import {MessengerService} from '../../messenger.service';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  message: Message;
  dialogMetaData: DialogMetaData;

  users: IUser[];
  selected: IUser;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'IMessage here...',
  };

  constructor(public dialogRef: MatDialogRef<MessageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private messengerService: MessengerService) {
  }

  ngOnInit() {
    this.message = this.data.message;
    this.dialogMetaData = this.data.dialogMetaData;
    this.getRecipients();
  }

  cancelDialog(): void {
    this.dialogRef.close('quit');
  }

  onSubmit() {
    this.dialogRef.close('submit');
  }

  getRecipients() {
    this.messengerService.getSystemUsers().subscribe((userList) => {
        this.users = userList;
      },
      (err) => {
        console.log(err);
      });

  }

  onSelect(user: IUser) {
    this.message.recipientFirstName = user.local.firstName;
    this.message.recipientLastName = user.local.lastName;
    this.message.toID = user._id;
  }

}
