import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Sequence} from '../../models/modelInterfaces';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-sequence',
  templateUrl: './admin-sequence.component.html',
  styleUrls: ['./admin-sequence.component.css']
})
export class AdminSequenceComponent implements OnInit {

  sequences: Sequence[];

  dataSource = new MatTableDataSource();
  displayedColumns = ['selectSequence', 'sequenceTitle', 'created_at'];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.showSequences();
  }

  showSequences() {
    this.dataService.getSequences()
      .subscribe((data) => {
        console.log(data);
        this.sequences = data;
        //this.dataSource.data = this.users;
      });
  }

}
