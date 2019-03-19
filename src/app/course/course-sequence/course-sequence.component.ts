import { Component, OnInit } from '@angular/core';
import {Sequence} from '../../models/modelInterfaces';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {DataService} from '../../data.service';
import {UserService} from '../../user.service';
import {RSequence} from '../../models/modelClasses';
import {CourseDialogComponent} from '../../home/course-dialog/course-dialog.component';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {SequenceDialogComponent} from './sequence-dialog/sequence-dialog.component';

@Component({
  selector: 'app-course-sequence',
  templateUrl: './course-sequence.component.html',
  styleUrls: ['./course-sequence.component.css']
})
export class CourseSequenceComponent implements OnInit {

  sequences: Sequence[];
  newSequence: Sequence;
  dataSource = new MatTableDataSource();
  displayedColumns = ['selectSequence', 'sequenceTitle', 'created_at'];

  constructor(public dialog: MatDialog, private dataService: DataService, private userService: UserService, private courseSequenceQuestionService: CourseSequenceQuestionService) { }

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

  submitNewSequence(): void {

    let newlyCreatedSequenceID: String;

    this.courseSequenceQuestionService.addSequence(this.newSequence).subscribe(
      data => {
        newlyCreatedSequenceID = data['sequenceID'];
        this.newSequence = null;
      },
      err => {
        console.error('Error adding sequence!');
        return;
      },
      () => {
        this.courseSequenceQuestionService.addSequenceToCourse(newlyCreatedSequenceID, this.userService.currentCourse._id).subscribe(
          data => {console.log(data);},
          err => {},
          () => { this.showSequences();} )
          }
        );
      };


  openSequenceDialog(): void {

    this.newSequence = new RSequence();
    let dialogRef = this.dialog.open(SequenceDialogComponent, {

      data: {sequence: this.newSequence}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.submitNewSequence();
    });
  }




}
