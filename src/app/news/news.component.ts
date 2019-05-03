import {Component, Input, OnInit} from '@angular/core';
import {RNews} from '../models/modelClasses';
import {NewsDialogComponent} from '../dialogs/news-dialog/news-dialog.component';
import {MatDialog} from '@angular/material';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {News} from '../models/modelInterfaces';
import {UserService} from '../user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() id: String;
  newsItem: RNews;
  news: News[];

  constructor(private dialog: MatDialog, private dataService: DataService, private route: ActivatedRoute,
              private courseSequenceQuestionService: CourseSequenceQuestionService, private userService: UserService) { }

  ngOnInit() {
    this.getNews(this.id);
  }

  getNews(id: String) {
    this.dataService.getNews(id)
      .subscribe((data) => {
        this.news = data;
      });
  }

  openNewsDialog(): void {

    this.newsItem = new RNews();

    const dialogRef = this.dialog.open(NewsDialogComponent, {
      data: {news: this.newsItem, dialogMetaData: {titleText: ' Create News', okButtonText: 'Save'}}
    });

    dialogRef.afterClosed().subscribe(result => {if (result === 'submit') { this.postNews(); } else { (this.getNews(this.id)); }});
  }

  postNews(): void {

    this.newsItem.owner = {
      'id': this.userService.getCurrentUser()._id,
      'firstName': this.userService.getCurrentUser().local.firstName,
      'lastName': this.userService.getCurrentUser().local.lastName
    };

    this.newsItem.courseID = this.userService.getCurrentCourse()._id;

    this.courseSequenceQuestionService.addNews(this.newsItem).subscribe(
      data => {this.getNews(this.id); },
      err => {
        console.error('Error adding news!' + err);
        return;
      }
    );
  }

}
