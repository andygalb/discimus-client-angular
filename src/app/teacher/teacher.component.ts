import { Component, Inject } from '@angular/core';
import { CourseSequenceQuestionService } from '../course-sequence-question.service';
import { UserService} from  '../user.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Course, Question, Sequence, User} from '../models/modelInterfaces';


@Component({
  selector: 'teacher',
  templateUrl: 'teacher.component.html',
})

export class TeacherComponent implements OnInit {


  questions: Question[];
  sequences: Sequence[];
  courses: Course[];
  user: User;
  courseForm: FormGroup;
  response: String;
  selectedCourse: Course;
  userService: UserService;
  newCourse: Course;
  error: string;

  displayedColumns: string[] = ['title', 'description', 'creationDate', 'edit', 'delete'];

  constructor(private route: ActivatedRoute, private muserService: UserService, private courseSequenceQuestionService: CourseSequenceQuestionService,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.courseForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],

    });
    this.userService = muserService;
  }

  ngOnInit(): void {
   // if(!this.userService.isUserLoggedIn){ this.userService.logOut();}
    this.user = this.userService.getCurrentUser();
    this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data);
  }

  onSelect(course: Course): void {
    this.courseSequenceQuestionService.addCourse(this.newCourse).subscribe(data => this.response = data);
  }

  onDelete(course: Course): void {

    this.courseSequenceQuestionService.deleteCourse(course).subscribe(
      data => this.response = data,
      err => {
        console.error('Error deleting course!');
        return;
      },
      () => this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data)
    );

  }

  createNewCourse(): void {
    this.newCourse = {_id: null, courseTitle: '', creatorID: null, courseDescription: '', sequences: [], updated_at: null, created_at: null};
  }

  submitNewCourse(): void {

    this.courseSequenceQuestionService.addCourse(this.newCourse).subscribe(
      data => {
        this.response = data;
        this.newCourse = null;
      },
      err => {
        console.error('Error adding course!');
        return;
      },
      () => this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data)
    );

  }


}

