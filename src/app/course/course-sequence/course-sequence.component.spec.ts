import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseSequenceComponent} from './course-sequence.component';
import {MatButtonModule, MatCardModule, MatDialog, MatDialogModule, MatDialogRef, MatIconModule, MatMenuModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../../user.service';
import {MockCourseSequenceQuestionService, MockUserService, MockDataService} from '../../mocks/mocks';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {DataService} from '../../data.service';

describe('CourseSequenceComponent', () => {
  let component: CourseSequenceComponent;
  let fixture: ComponentFixture<CourseSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSequenceComponent],
      imports: [HttpClientTestingModule, MatCardModule, MatMenuModule, MatIconModule,
        RouterTestingModule, MatButtonModule, MatDialogModule],
      providers: [{provide: UserService, useClass: MockUserService},
        {provide: DataService, useClass: MockDataService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
        {provide: ActivatedRoute , useValue: {
          parent : {snapshot: {paramMap: convertToParamMap({'id': '123'}) }}
        }}
          ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
