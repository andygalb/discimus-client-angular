import {Component, OnInit} from '@angular/core';
import {News} from '../../models/modelInterfaces';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-site-news',
  templateUrl: './site-news.component.html',
  styleUrls: ['./site-news.component.css']
})
export class SiteNewsComponent implements OnInit {

  news: News[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getNews('all').subscribe(siteNews => this.news = siteNews);
  }

}
