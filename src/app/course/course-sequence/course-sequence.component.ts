import { Component, OnInit } from '@angular/core';
import {Sequence} from '../../models/modelInterfaces';
import {MatTableDataSource} from '@angular/material';
import {DataService} from '../../data.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-course-sequence',
  templateUrl: './course-sequence.component.html',
  styleUrls: ['./course-sequence.component.css']
})
export class CourseSequenceComponent implements OnInit {

  sequences: Sequence[];
  dataSource = new MatTableDataSource();
  displayedColumns = ['selectSequence', 'sequenceTitle', 'created_at'];

  constructor(private dataService: DataService, private userService: UserService) { }

  ngOnInit() {
    this.showSequences();
  }

  showSequences() {
    this.dataService.getSequencesForCourse(this.userService.currentCourse._id)
      .subscribe((sequences) => {
        console.log(sequences);
        this.sequences = sequences;
      });
  }

}
