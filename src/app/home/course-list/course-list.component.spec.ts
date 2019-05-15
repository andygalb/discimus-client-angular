import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseListComponent} from './course-list.component';
import {
  MatCardModule, MatDialogModule, MatDialogRef, MatExpansionModule, MatFormFieldModule, MatIconModule,
  MatMenuModule
} from '@angular/material';
import {TruncatePipe} from '../../truncate.pipe';
import {RouterTestingModule} from '@angular/router/testing';
import {MockCourseSequenceQuestionService, MockDataService, MockUserService} from '../../mocks/mocks';
import {UserService} from '../../user.service';
import {HttpClientModule} from '@angular/common/http';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {DataService} from '../../data.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent,  TruncatePipe],
      imports: [HttpClientModule, MatDialogModule, RouterTestingModule, MatCardModule,
        MatMenuModule, MatFormFieldModule, MatIconModule, MatExpansionModule],
      providers: [{provide: UserService, useClass: MockUserService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
        {provide: DataService, useClass: MockDataService},
        {provide: MatDialogRef}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
