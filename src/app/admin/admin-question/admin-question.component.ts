import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {DataService} from '../../data.service';
import {IQuestion} from '../../models/modelInterfaces';

@Component({
  selector: 'app-admin-question',
  templateUrl: './admin-question.component.html',
  styleUrls: ['./admin-question.component.css']
})
export class AdminQuestionComponent implements OnInit {

  questions: IQuestion[];

  dataSource = new MatTableDataSource();
  displayedColumns = ['firstName', 'lastName', 'userName', 'admin', 'userType'];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.showQuestions();
  }

  showQuestions() {
    this.dataService.getQuestions()
      .subscribe((data) => {
        console.log(data);
        this.questions = data;
      });
  }

}
