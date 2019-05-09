import {Component, Input, OnInit} from '@angular/core';
import {Sequence, User} from '../../models/modelInterfaces';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {DataService} from '../../data.service';
import {UserService} from '../../user.service';
import {RSequence} from '../../models/modelClasses';
import {CourseDialogComponent} from '../../dialogs/course-dialog/course-dialog.component';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {SequenceDialogComponent} from '../../dialogs/sequence-dialog/sequence-dialog.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-sequence',
  templateUrl: './course-sequence.component.html',
  styleUrls: ['./course-sequence.component.css']
})
export class CourseSequenceComponent implements OnInit {

  sequences: Sequence[];
  @Input() style: string;
  newSequence: Sequence;
  dataSource = new MatTableDataSource();
  displayedColumns = ['selectSequence', 'sequenceTitle', 'created_at'];

  constructor(public dialog: MatDialog, private dataService: DataService, private route: ActivatedRoute,
              public userService: UserService, private courseSequenceQuestionService: CourseSequenceQuestionService) {
  }

  ngOnInit() {
    this.sequences = [];
    this.showSequences();
  }

  showSequences() {
    // TODO Hack! Get id from userservice instead.
    this.dataService.getSequencesForCourse(this.route.parent.snapshot.paramMap.get('id'))
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
          data => {
            console.log(data);
          },
          err => {
          },
          () => {
            this.showSequences();
          });
      }
    );
  }


  openSequenceDialog(): void {

    this.newSequence = new RSequence();
    const dialogRef = this.dialog.open(SequenceDialogComponent, {

      data: {sequence: this.newSequence}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'submit') {
        this.submitNewSequence();
      }

    });
  }

  // This function is needed to separate "real" questions from questions that only consist of text and require no answer.
  answeredQuestionCounter(sequenceID: string) {
    let count = 0;
    const user: User = this.userService.getCurrentUser();

    for (let i = 0; i < user.results.length; i++) {
      if (user.results[i].sequenceID === sequenceID) {
        count++;
      }

    }

    return count;
  }


}
