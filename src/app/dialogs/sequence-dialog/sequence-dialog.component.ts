import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {Sequence} from '../../models/modelInterfaces';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './sequence-dialog.component.html',
  styleUrls: ['./sequence-dialog.component.css']
})
export class SequenceDialogComponent implements OnInit {

  sequence: Sequence;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Sequence description here...',
  };

  constructor(public dialogRef: MatDialogRef<SequenceDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.sequence = this.data.sequence;
  }

  cancelDialog(): void {
    this.dialogRef.close('quit');
  }

  onSubmit() {
    this.dialogRef.close('submit');
  }


}
