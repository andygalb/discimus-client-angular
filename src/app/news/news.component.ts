import {Component, Input, OnInit} from '@angular/core';
import {News} from '../models/modelClasses';
import {NewsDialogComponent} from '../dialogs/news-dialog/news-dialog.component';
import {MatDialog} from '@angular/material';
import {DataService} from '../data.service';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {INews} from '../models/modelInterfaces';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() id: String;

  newsItem: News;
  news: Observable<INews[]>;

  constructor(private dialog: MatDialog, public dataService: DataService,
              private courseSequenceQuestionService: CourseSequenceQuestionService, public userService: UserService) {
  }

  ngOnInit() {
    this.getNews(this.id);
  }

  getNews(id: String) {
    this.news = this.dataService.getNews(id);
  }

  openNewsDialog(): void {

    this.newsItem = new News();

    const dialogRef = this.dialog.open(NewsDialogComponent, {
      data: {news: this.newsItem, dialogMetaData: {titleText: ' Create INews', okButtonText: 'Save'}}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'submit') {
        this.postNews();
      } else {
        (this.getNews(this.id));
      }
    });
  }

  postNews(): void {

    this.newsItem.owner = {
      'id': this.userService.getCurrentUser()._id,
      'firstName': this.userService.getCurrentUser().local.firstName,
      'lastName': this.userService.getCurrentUser().local.lastName
    };

    this.newsItem.courseID = this.userService.getCurrentCourse()._id;

    this.courseSequenceQuestionService.addNews(this.newsItem).subscribe(
      data => {
        this.getNews(this.id);
      },
      err => {
        console.error('Error adding news!' + err);
        return;
      }
    );
  }

}
