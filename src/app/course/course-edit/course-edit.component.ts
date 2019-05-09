import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Course, Sequence} from '../../models/modelInterfaces';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {RCourse, RSequence} from '../../models/modelClasses';

@Component({
  selector: 'app-course',
  templateUrl: './course-edit.component.html',
})
export class CourseEditComponent implements OnInit {

  descriptionFC = new FormControl();

  constructor(private route: ActivatedRoute,
              private courseSequenceQuestionService: CourseSequenceQuestionService,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.sequenceForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  sequenceForm: FormGroup;
  title = 'LTC';
  courseID: number;
  id: string;
  sequencesToShow: Sequence[];
  selectedSequence: Sequence;
  newSequence: Sequence;
  newSequenceID: String;
  selectedCourse: RCourse;
  response: String;

  ngOnInit() {
    const courseID = this.route.parent.snapshot.params['id'];

    this.courseSequenceQuestionService.getCourseByID(courseID).subscribe(
      data => {
        this.selectedCourse = data;
        this.courseSequenceQuestionService.currentCourse = data;
        console.log(data);
      },
      err => {
        console.error('Error getting course!');
        return;
      },
      () => {
        this.reloadDisplay();
      }
    );
  }

  createNewSequence(): void {
    this.newSequence = new RSequence();
  }

  // After a sequence is successfully created it has to be added to the course.
  submitNewSequence(sequence: Sequence): void {

    this.courseSequenceQuestionService.addSequence(this.newSequence).subscribe(
      data => {
        console.log('The sequence was created and now data has been returned.');
        console.log('The data is:');
        console.log(data);
        // this.response = data;
        this.newSequenceID = data['sequenceID'];
        console.log(this.newSequenceID);
      },
      err => {
        console.error('Error adding sequence');
        return;
      },
      () => {
        // TODO Case when sequence could not be created must be handled
        this.selectedCourse.sequences.push(this.newSequenceID);
        this.courseSequenceQuestionService.updateCourse(this.selectedCourse).subscribe(
          data => {
            console.log(data);
            this.response = data;
          },
          err => {
            console.error('Error adding sequence to course');
            return;
          },
          () => {
            this.reloadDisplay();
            this.newSequence = null;
          }
        );
      }
    );
  }

  onSelectSequence(sequence: Sequence): void {
    this.selectedSequence = sequence;
  }

  reloadDisplay(): void {
    if (!this.selectedCourse.sequences) {
      return;
    }
    this.courseSequenceQuestionService.getMultipleSequences(this.selectedCourse.sequences).subscribe(
      data => {
        console.log(data);
        this.sequencesToShow = data;
      }, err => {
        console.error('Error getting sequences:' + err);
        return;
      });
  }

  onDelete(sequence: Sequence): void {
    this.courseSequenceQuestionService.deleteSequence(sequence).subscribe(
      data => this.response = data,
      err => {
        console.error('Error deleting sequence!');
        return;
      },
      () => {
        this.reloadDisplay();
      }
    );
  }

  saveChanges(): void {

    this.courseSequenceQuestionService.updateCourse(this.selectedCourse).subscribe(
      data => {
        console.log(data);
        this.response = data;
      },
      err => {
        console.error('Error updating course');
        return;
      },
      () => {
        this.reloadDisplay();
      }
    );
  }
}




