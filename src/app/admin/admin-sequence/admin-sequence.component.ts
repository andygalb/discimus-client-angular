import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {Sequence} from '../../models/modelInterfaces';
import {MatTableDataSource} from '@angular/material';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-admin-sequence',
  templateUrl: './admin-sequence.component.html',
  styleUrls: ['./admin-sequence.component.css']
})
export class AdminSequenceComponent implements OnInit {

  sequences: Sequence[];

  actions = ['Delete'];
  dataSource = new MatTableDataSource();
  displayedColumns = ['selectSequence', 'sequenceTitle', 'created_at'];


  constructor(private dataService: DataService, public userService: UserService) {
  }

  ngOnInit() {
    this.showSequences();
  }

  showSequences() {
    this.dataService.getSequences()
      .subscribe((data) => {
        console.log(data);
        this.sequences = data;
      });
  }

}
