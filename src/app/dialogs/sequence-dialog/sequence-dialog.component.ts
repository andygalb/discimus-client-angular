import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {ISequence} from '../../models/modelInterfaces';

@Component({
  selector: 'app-sequence-dialog',
  templateUrl: './sequence-dialog.component.html',
  styleUrls: ['./sequence-dialog.component.css']
})
export class SequenceDialogComponent implements OnInit {

  sequence: ISequence;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'ISequence description here...',
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
