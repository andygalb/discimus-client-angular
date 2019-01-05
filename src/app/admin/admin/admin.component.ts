import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../data.service';
import {MatTableDataSource, PageEvent} from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { RouterModule } from '@angular/router';
import {Sequence} from '../../models/modelInterfaces';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  sequences: Sequence[];

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }


  showSequences() {
    this.dataService.getSequences()
      .subscribe((data) => {
        console.log(data);
        this.sequences = data;
      });
  }

}

