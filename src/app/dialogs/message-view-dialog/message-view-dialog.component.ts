import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogMetaData, RMessage} from '../../models/modelClasses';

@Component({
  selector: 'app-message-view-dialog',
  templateUrl: './message-view-dialog.component.html',
  styleUrls: ['./message-view-dialog.component.css']
})
export class MessageViewDialogComponent implements OnInit {

  message: RMessage;
  dialogMetaData: DialogMetaData;

  constructor(public dialogRef: MatDialogRef<MessageViewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.message = this.data.message;
    this.dialogMetaData = this.data.dialogMetaData;
  }

  cancelDialog(): void {
    this.dialogRef.close('quit');
  }

}
