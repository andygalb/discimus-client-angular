import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {DialogMetaData, RNews} from '../../models/modelClasses';

@Component({
  selector: 'app-news-dialog',
  templateUrl: './news-dialog.component.html',
  styleUrls: ['./news-dialog.component.css']
})
export class NewsDialogComponent implements OnInit {

  news: RNews;
  dialogMetaData: DialogMetaData;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'News here...',
  };

  constructor(public dialogRef: MatDialogRef<NewsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.news = this.data.news;
    this.dialogMetaData = this.data.dialogMetaData;
  }

  cancelDialog(): void {
    this.dialogRef.close('quit');
  }

  onSubmit() {
    this.dialogRef.close('submit');
  }

}
